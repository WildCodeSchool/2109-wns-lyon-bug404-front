import { gql } from "@apollo/client";

export const GET_ALL_TASKS = gql`
  query getTasks {
    getTasks {
      id
      title
      due_date
      project {
        title
      }
    }
  }
`;
