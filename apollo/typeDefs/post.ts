import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";

export const typeDefs = gql`
  #graphql
  scalar Date

  type User {
    username: String
  }

  type Post {
    id: String
    title: String
    imageUrl: String
    content: String
    createdAt: Date
    updatedAt: Date
    userId: String
  }

  extend type Query {
    getAllPosts: [Post]
    post(id: String!): Post
  }

  input CreatePostInput {
    title: String
    content: String
    imageUrl: String
    userId: String
  }

  type Mutation {
    createPost(content: CreatePostInput!): Post!
  }
`;

// const post = [
//   {
//     title: "hello",
//     content: "String",
//     createdAt: "Date",
//     updatedAt: "Date",
//     user: "User",
//   },
//   {
//     title: "This is the first blog post ",
//     content: "String",
//     createdAt: "Date",
//     updatedAt: "Date",
//     user: "User",
//   },
// ];

export const resolver = {
  Query: {
    async getAllPosts(_: any, __: any, ctx: any) {
      return ctx.prisma.post.findMany();
    },
  },
  // Mutation: {
  //   async createPost(_: any, args: any, ctx: ServerContext) {
  //     try {
  //       return ctx.prisma.user.create({
  //         data: {
  //           title: args.content.title,
  //           content: args.content.content,
  //           imageUrl: args.content.imageUrl,

  //           userId: args.content.userId,
  //         },
  //       });
  //     } catch (error) {}
  //   },
  // },
};
