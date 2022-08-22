import { UsersResolver } from '../src/resolvers/UserResolver';
import { ResetPasswordInput, User, UserUpdateInput } from '../src/models/User';
import { testConn } from './test-utils/testConn';
import { Connection } from 'typeorm';
import { gCall } from './test-utils/gcall';

const signinMutation = `
mutation Signin($password: String!, $email: String!) {
  signin(password: $password, email: $email)
}
`;

let conn: Connection;
beforeAll(async () => {
  console.log(1);
  conn = await testConn();
  console.log(conn);
});

afterAll(async () => {
  console.log(2);
  await conn.close();
});

const registerMutation = `
mutation Signup
($password: String!, $email: String!, $familyName: String!, $firstName: String!) 
{
  signup(password: $password, email: $email, familyName: $familyName, firstName: $firstName) 
  {
    email
    id
    firstName
    familyName
  }
}`;

describe('Add a new user', () => {
  test('return a valid response', async () => {
    expect(true).toEqual(true);
  });
});
describe('Register', () => {
  it('create user', async () => {
    console.log(
      await gCall({
        source: registerMutation
      })
    );
  });
});
