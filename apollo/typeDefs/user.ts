import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";

export const typeDefs = gql`
  #graphql

  enum Role {
    ADMIN
    CLIENT
  }

  type User {
    id: String
    email: String
    password: String
  }
`;
