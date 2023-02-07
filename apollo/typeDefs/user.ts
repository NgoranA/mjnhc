import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";

export const typeDefs = gql`
  #graphql
  type User {
    id: ID
    username: String
    email: String    
    position: String
    image:   String?
    posts: [Post]
  }
  

  extend type Query {
    getUser(id: ID!): User
    
  }
`;
