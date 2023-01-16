import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "../../apollo/schema/schema";
import prisma from "../../apollo/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

export type ServerContext = {
  req: NextApiRequest;
  res: NextApiResponse;
  prisma: PrismaClient;
};

export const apolloServer = new ApolloServer<ServerContext>({ schema });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => {
    const session = getSession();

    if (!session)
      return {
        req,
        res,
        prisma,
      };

    return {
      req,
      res,
      prisma,
    };
  },
});
