import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";

export const typeDefs = gql`
  #graphql

  type Testimony {
    id: ID!
    name: String
    country: String
    testimony: String
    published: Boolean
  }

  extend type Query {
    testimonies: [Testimony]
    testimony(id: ID!): Testimony
  }

  input TestimonyInput {
    name: String
    country: String
    testimony: String
    published: Boolean
  }

  type Mutation {
    addTestimony(content: TestimonyInput!): Testimony!
    editTestimony(id: ID!, content: TestimonyInput!): Testimony!
    editTestimonyState(id: ID!): Testimony!
    deleteTestimony(id: ID!): Testimony!
  }
`;

export const resolver = {
  Query: {
    async testimonies(_: any, __: any, ctx: ServerContext) {
      return ctx.prisma.testimony.findMany();
    },
    async testimony(_: any, args: any, ctx: ServerContext) {
      return ctx.prisma.testimony.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    async addTestimony(_: any, args: any, ctx: ServerContext) {
      console.log(args);
      return await ctx.prisma.testimony.create({
        data: {
          name: args.content.name,
          country: args.content.country,
          testimony: args.content.testimony,
          published: false,
        },
      });
    },
    async editTestimony(_: any, args: any, ctx: ServerContext) {
      // handle the case for drafts here first before anything
      return await ctx.prisma.testimony.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.content,
          published: false,
        },
      });
    },

    async editTestimonyState(_: any, args: any, ctx: ServerContext) {
      // const testimony = await ctx.prisma.testimony.findUnique({
      //   where: { id: args.id },
      // });
      return await ctx.prisma.testimony.update({
        where: { id: args.id },
        data: {
          published: true,
        },
      });
    },

    async deleteTestimony(_: any, args: any, ctx: ServerContext) {
      return await ctx.prisma.testimony.delete({
        where: { id: args.id },
      });
    },
  },
};
