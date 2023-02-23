import sendMail from "@sendgrid/mail";

sendMail.setApiKey(process.env.SEND_MAIL_API_KEY!);

export const msg = {
  to: "test@example.com", // Change to your recipient
  from: "test@example.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
