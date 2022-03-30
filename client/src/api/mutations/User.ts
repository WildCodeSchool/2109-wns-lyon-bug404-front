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

// Forgot password
export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

// reset password
export const RESET_PASSWORD = gql`
  mutation ResetUserPassword($token: String!, $reset: ResetPasswordInput!) {
    resetUserPassword(token: $token, reset: $reset)
  }
`;

// export const GET_PROFILE = gql`|
//   mutation GetProfile() {
//     getProfile()
//   }
// `
