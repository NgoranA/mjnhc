import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";
import { PrismaClient } from "@prisma/client";

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
    status: Status
  }

  enum Status {
    PENDING
    APPROVED
  }

  input AppointmentInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    date: Date
    country: String!
    status: Status
  }

  extend type Query {
    "Get all appointments"
    appointments: [Appointment]
    "Get a single appointment"
    appointment(id: ID!): Appointment
  }

  "The response from the creation of an appointment"
  type CreateAppointmentResponse {
    code: String!
    success: Boolean!
    message: String!
    appointment: Appointment
  }

  type Mutation {
    "This is the creation of an appointment"
    createAppointment(content: AppointmentInput!): CreateAppointmentResponse!
    "This is to approve the appointment"
    approveAppointment(id: ID!): CreateAppointmentResponse!
  }
`;

export const appointmentResolvers = {
  Query: {
    async appointments(_: any, __: any, context: ServerContext) {
      return await context?.prisma?.appointment.findMany();
    },

    async appointment(_: any, args: any, ctx: ServerContext) {
      return await ctx.prisma?.appointment.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createAppointment: async (_: any, args: any, ctx: ServerContext) => {
      try {
        const appointment = await ctx?.prisma?.appointment.create({
          data: {
            firstName: args.content.firstName,
            lastName: args.content.lastName,
            email: args.content.email,
            phone: args.content.phone,
            date: args.content.date,
            country: args.content.country,
            status: "PENDING",
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
        return {
          code: error?.code,
          success: false,
          message: error?.meta?.target,
          appointment: null,
        };
      }
    },

    approveAppointment: async (
      _: any,
      { id }: { id: string },
      { prisma }: { prisma: PrismaClient }
    ) => {
      try {
        const appointment = await prisma.appointment.update({
          where: { id: id },
          data: {
            status: "APPROVED",
          },
        });
        return {
          code: 201,
          success: true,
          message: "Appointment Approved",
          appointment,
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: "Appointment Not Approved. Something happened!",
          appointment: null,
        };
      }
    },
  },
};
