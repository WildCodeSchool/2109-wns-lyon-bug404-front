import * as jwt from 'jsonwebtoken';

export const createConfirmationUrl = async (
  email: string,
  actionType: string
) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET);

  return `http://localhost:3000/user/${actionType}/${token}`;
};
