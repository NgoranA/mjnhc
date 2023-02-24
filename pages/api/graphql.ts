import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "../../apollo/schema/schema";
import prisma from "../../apollo/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const receiving_email = process.env.RECEIVE_EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: receiving_email,
};

export type ServerContext = {
  req: NextApiRequest;
  res: NextApiResponse;
  prisma: PrismaClient;
  mailOptions?: any;
  transporter?: any;
};

export const apolloServer = new ApolloServer<ServerContext>({ schema });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return {
        req,
        res,
        prisma,
        mailOptions,
        transporter,
      };
    }
    const { user } = session;
    return {
      req,
      res,
      prisma,
      user,
      mailOptions,
      transporter,
    };
  },
});
