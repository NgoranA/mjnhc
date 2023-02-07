import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";

export const typeDefs = gql`
  #graphql
  scalar Date

  type User {
    id: ID
    username: String
    email: String
    position: String
    image: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    image: String
    description: String
    createdAt: Date
    updatedAt: Date
    user: User
  }

  extend type Query {
    getAllPosts: [Post]
    getPost(id: String!): Post
  }

  input CreatePostInput {
    title: String
    description: String
    image: String
  }

  type CreatePostResponse {
    code: Int
    success: Boolean
    message: String
    post: Post
  }

  type Mutation {
    createPost(data: CreatePostInput!): CreatePostResponse!
    editPost(id: ID!, content: CreatePostInput!): CreatePostResponse!
    deletePost(id: ID!): Post
  }
`;

export const resolver = {
  Query: {
    async getAllPosts(_: any, __: any, ctx: ServerContext) {
      return await ctx.prisma.post.findMany({
        include: {
          User: true,
        },
      });
    },
    async getPost(_: any, { id }: { id: string }, ctx: ServerContext) {
      return await ctx.prisma.post.findUnique({
        where: { id: id },
        include: {
          User: true,
        },
      });
    },
  },
  Mutation: {
    async createPost(_: any, args: any, ctx: any) {
      try {
        const post = await ctx.prisma.post.create({
          data: {
            title: args.data.title,
            description: args.data.description,
            image: args.data.image,
            User: {
              //
              create: {
                username: "Ngoran",
                email: "ngoran@gmail.com",
              },
            },
          },
        });
        return {};
      } catch (error) {
        console.log(error);
      }
    },
  },
};
