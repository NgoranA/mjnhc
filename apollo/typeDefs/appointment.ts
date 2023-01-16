import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";

export const typeDefs = gql`
  #graphql
  scalar Date

  type Appointment {
    id: String
    firstName: String
    lastName: String
    email: String
    phone: String
    createdAt: Date
    updatedAt: Date
    date: Date
    country: String
  }

  extend type Query {
    appointments: [Appointment]
    appointment(id: String!): Appointment
  }
`;

export const appointmentResolvers = {
  Query: {
    appointments(_: any, __: any, context: ServerContext) {
      return context.prisma.appointment.findMany();
    },

    appointment(_: any, args: any, ctx: ServerContext) {
      return ctx.prisma.appointment.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
};
