import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";

export const typeDefs = gql`
  #graphql

  type Testimony {
    id: String
    name: String
    country: String
    testimony: String
    published: Boolean
  }

  extend type Query {
    testimonies: [Testimony]
    testimony(id: String!): Testimony
  }

  input TestimonyInput {
    name: String
    country: String
    testimony: String
    published: Boolean
  }

  input TestimonyPublishInput {
    published: Boolean
  }

  type Mutation {
    addTestimony(content: TestimonyInput!): Testimony!
    editTestimony(id: String!, content: TestimonyInput!): Testimony!
    editTestimonyState(
      id: String!
      content: TestimonyInput!
      published: TestimonyPublishInput!
    ): Testimony!
    deleteTestimony(id: String): Testimony!
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
      return ctx.prisma.testimony.create({
        data: {
          name: args.content.name,
          country: args.content.country,
          testimony: args.content.content,
          published: false,
        },
      });
    },
    async editTestimony(_: any, args: any, ctx: ServerContext) {
      // handle the case for drafts here first before anything
      return ctx.prisma.testimony.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.content.name,
          country: args.content.country,
          testimony: args.content.testimony,
          published: false,
        },
      });
    },

    async editTestimonyState(_: any, args: any, ctx: ServerContext) {
      return ctx.prisma.testimony.update({
        where: { id: args.id },
        data: {
          ...args.content,
          published: args.published,
        },
      });
    },

    async deleteTestimony(_: any, args: any, ctx: ServerContext) {
      return ctx.prisma.testimony.delete({
        where: { id: args.id },
      });
    },
  },
};
