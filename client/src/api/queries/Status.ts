import { gql } from "@apollo/client";

// get status byt project ID
export const GET_STATUS_BY_PROJECT_ID = gql`
  query Query($projectId: Float!) {
    getStatusByProjectID(projectID: $projectId) {
      name
      tasks {
        title
        id
        due_date
        assigned_to {
          firstName
          familyName
        }
      }
    }
  }
`;
