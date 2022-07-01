import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query GetProfile {
    getProfile {
      id
      email
      firstName
      familyName
      role
    }
  }
`;

// @Get all users
export const GET_ALL_USERS = gql`
  query Query {
    getUsers {
      id
      email
      password
      firstName
      familyName
      role
    }
  }
`;
