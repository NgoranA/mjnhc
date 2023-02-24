import { gql } from "@apollo/client";
import { ServerContext } from "../../pages/api/graphql";
import { PrismaClient } from "@prisma/client";

const APPOINTMENT_MESSAGE_FIELDS: any = {
  firstName: "FirstName",
  lastName: "LastName",
  email: "Email",
  country: "Residence Country",
  phone: "Phone Number",
  date: "Date of Appointment",
};

const generateEmailContent = (data: any) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${APPOINTMENT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${APPOINTMENT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New  Appointment Details</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

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

        await ctx.transporter.sendMail({
          ...ctx.mailOptions,
          ...generateEmailContent(args.content),
          subject: "Appoinment Booking",
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
