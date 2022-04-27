import { gql } from "@apollo/client";

// add a new project
export const CREATE_PROJECT = gql`
  mutation CreateProject($project: ProjectInput!, $userId: ID!) {
    createProject(project: $project, userID: $userId) {
      title
      id
      description
      image_url
      start_date
      end_date
      state
      created_by {
        email
      }
    }
  }
`;
