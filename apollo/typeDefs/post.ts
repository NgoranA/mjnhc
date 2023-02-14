import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";
import { PrismaClient } from "@prisma/client";

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
    User: User
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
              // Here we will use connect to attach the current user to the post being created
              create: {
                username: "Ngoran",
                email: "ngoran@gmail.com",
              },
            },
          },
        });
        return {
          code: 200,
          success: true,
          message: "Blog Post created successfully!",
          post,
        };
      } catch (error) {
        return {
          code: 505,
          success: false,
          message: "Post not created. check the error",
          post: null,
        };
      }
    },
    async editPost(
      parent: any,
      { id, content }: { id: string; content: any },
      { prisma, user }: { prisma: PrismaClient; user: any }
    ) {
      try {
        const post = await prisma.post.update({
          where: { id },
          data: {
            ...content,
          },
        });
        return {
          code: 201,
          success: true,
          message: "Blog Post Updated successfully!",
          post,
        };
      } catch (error) {
        return {
          code: 505,
          success: false,
          message: "Post not created. check the error",
          post: null,
        };
      }
    },
    async deletePost(
      parent: any,
      { id }: { id: string },
      { prisma, user }: { prisma: PrismaClient; user: any }
    ) {
      try {
        const post = prisma.post.delete({ where: { id } });
        return {
          code: 201,
          success: true,
          message: "Blog Post Deleted successfully!",
          post,
        };
      } catch (error) {
        return {
          code: 505,
          success: false,
          message: "Post not created. check the error",
          post: null,
        };
      }
    },
  },
};
