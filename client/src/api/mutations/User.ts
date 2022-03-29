import { gql } from "@apollo/client";

// SignIn
export const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password)
  }
`;

// SignUp
export const SIGNUP = gql`
  mutation Signup(
    $password: String!
    $email: String!
    $familyName: String!
    $firstName: String!
  ) {
    signup(
      password: $password
      email: $email
      familyName: $familyName
      firstName: $firstName
    ) {
      email
      id
      firstName
      familyName
    }
  }
`;

export const CONFIRM_USER = gql`
  mutation ConfirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;

// export const GET_PROFILE = gql`|
//   mutation GetProfile() {
//     getProfile()
//   }
// `
