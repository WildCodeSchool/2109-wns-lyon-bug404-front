import { User } from '../src/models/User';
import { testConn } from './test-utils/testConn';
import { Connection } from 'typeorm';
import { gCall } from './test-utils/gcall';
const getUser = require('user-generator');

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close();
});

const registerMutation = `
mutation Signup
($password: String!, $email: String!, $familyName: String!, $firstName: String!) 
{
  signup(password: $password, email: $email, familyName: $familyName, firstName: $firstName) 
  {
    email
    firstName
    familyName
  }
}`;

describe('Register user', () => {
  it('Should create a new user', async () => {
    const user = await getUser();

    const response = await gCall({
      source: registerMutation,
      variableValues: {
        password: user.password,
        email: user.email,
        familyName: user.lastname,
        firstName: user.firstname
      }
    });

    expect(response).toMatchObject({
      data: {
        signup: {
          email: user.email,
          firstName: user.firstname,
          familyName: user.lastname
        }
      }
    });

    const dbUser = await User.findOne({ where: { email: user.email } });
    expect(dbUser).toBeDefined();
    expect(dbUser!.confirmed).toBeFalsy();
  });
});
