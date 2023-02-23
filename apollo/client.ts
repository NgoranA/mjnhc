import { useMemo } from "react";
import { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  from,
} from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { schema } from "./schema/schema";
import merge from "deepmerge";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

//  because we are connecting to the schema, we define our schema and make use of this connection
type SchemaContext =
  | SchemaLink.ResolverContext
  | SchemaLink.ResolverContextFunction
  | undefined;

function createIsomorphLink(ctx: SchemaContext) {
  if (typeof window === "undefined") {
    //  here we have chosen to connect to the schema to speed up query time.
    // that is the reason why we are using schemaLink instead of Httpink
    // we also want to have access to the request object in our context when the page loads
    return new SchemaLink({ schema, context: ctx });
  } else {
    //  from lets us assign multiple links to our apollo context
    return from([
      new HttpLink({
        uri: "mjnhc.vercel.app/api/graphql",
        credentials: "same-origin",
      }),
    ]);
  }
}

function createApolloClient(ctx?: SchemaContext) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(ctx || undefined),
    cache: new InMemoryCache(),
  });
}

type InitApollo = {
  initialState?: any;
  ctx?: SchemaContext;
};

export function initializeApollo({ ctx, initialState }: InitApollo) {
  const _apolloClient = apolloClient ?? createApolloClient(ctx || undefined);

  // if my page has Next,js fetching methods that use Qpollo Client, the initial state gets hydrated here
  if (initialState) {
    const existingCache = _apolloClient.extract();
    // get the existing cache, loaded into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache);
    // restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // for SSG and SSR always create a new apollo client
  if (typeof window === "undefined") {
    return _apolloClient;
  }
  // create the apollo client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: { props: any }
) {
  pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(
    () => initializeApollo({ initialState: state }),
    [state]
  );
  return store;
}
