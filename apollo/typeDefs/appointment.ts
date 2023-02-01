import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";

export const typeDefs = gql`
  #graphql
  scalar Date

  type Appointment {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    date: Date
    createdAt: Date
    updatedAt: Date
    country: String!
    # requestStatus: Status
  }

  enum Status {
    PENDING
    APPROVED
  }

  input CreateAppointmentInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    date: Date
    country: String!
    # requestStatus: String
  }

  extend type Query {
    "Get all appointments"
    appointments: [Appointment]
    "Get a single appointment"
    appointment(id: ID!): Appointment
  }

  "The response from the creation of an appointment"
  type CreateAppointmentResponseType {
    code: String!
    success: Boolean!
    message: String!
    appointment: Appointment
  }

  type Mutation {
    "This is the creation of an appointment"
    createAppointment(
      content: CreateAppointmentInput!
    ): CreateAppointmentResponseType!
  }
`;

export const appointmentResolvers = {
  Query: {
    async appointments(_: any, __: any, context: ServerContext) {
      return await context.prisma.appointment.findMany();
    },

    async appointment(_: any, args: any, ctx: ServerContext) {
      return await ctx.prisma.appointment.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createAppointment: async (_: any, args: any, ctx: ServerContext) => {
      // console.log("Date", new Date().getUTCDate());

      try {
        const appointment = await ctx.prisma.appointment.create({
          data: {
            ...args.content,
            // requestStatus: "PENDING",
          },
        });

        return {
          code: 200,
          success: true,
          message:
            "Your appointment was successfully booked. We will reach out to you shortly!",
          appointment,
        };
      } catch (error: any) {
        console.log("erroorrrrrr", error);

        return {
          code: error?.code,
          success: false,
          message: error?.meta?.target,
          appointment: null,
        };
      }
    },
  },
};
