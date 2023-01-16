import { gql } from "@apollo/client";
import { typeDefs as Appointment } from "../typeDefs/appointment";
import { appointmentResolvers } from "../typeDefs/appointment";
import { resolver as postResolver } from "../typeDefs/post";
import { typeDefs as PostType } from "../typeDefs/post";
import { resolver as TestimonyResolver } from "../typeDefs/testimony";
import { typeDefs as TestimonyType } from "../typeDefs/testimony";
import { merge } from "lodash";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { GraphQLScalarType, Kind } from "graphql";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value: any) {
    return value.getTime();
  },
  parseValue(value: any) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }

    return null;
  },
});

export const typeDefs = gql`
  #graphql
  type Query {
    _empty: String
  }
`;

const resolvers = {
  Date: dateScalar,
};

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, Appointment, PostType, TestimonyType],
  resolvers: merge(
    resolvers,
    appointmentResolvers,
    postResolver,
    TestimonyResolver
  ),
});
