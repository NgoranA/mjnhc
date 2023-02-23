import { gql } from "@apollo/client";

export const contactDefs = gql`
  type Contact {
    firstName: String
    lastName: String
    email: String
    subject: String
    message: String
  }
  input ContactInput {
    firstName: String!
    lastName: String!
    email: String!
    subject: String!
    message: String!
  }

  type ContactResponse {
    code: Int!
    success: Boolean!
    message: String!
    content: Contact
  }

  type Mutation {
    createContact(content: ContactInput!): ContactResponse!
  }
`;

export type Contact = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export const contactResolver = {
  Mutation: {
    async createContact(_: unknown, args: any) {
      const dat = {
        code: 200,
        success: true,
        message: `${args.content.firstName} You've successfully reached out to us. We will get back to you shortly, Thanks`,
        content: args.content,
      };

      try {
        return dat;
      } catch (error) {
        return {
          code: 500,
          success: false,
          message:
            "You could not for some reason reach out. Please Try again later, Thank You",
          content: null,
        };
      }
    },
  },
};
