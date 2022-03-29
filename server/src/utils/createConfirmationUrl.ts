import * as jwt from "jsonwebtoken";

export const createConfirmationUrl = async (email: string) => {
  const token = jwt.sign({ email }, "supersecret");

  return `http://localhost:3000/user/confirm/${token}`;
};
