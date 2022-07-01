import { gql } from '@apollo/client';

// add a new project
export const CREATE_PROJECT = gql`
  mutation CreateProject($project: ProjectInput!, $userId: ID!) {
    createProject(project: $project, userID: $userId) {
      title
      id
      description
      start_date
      end_date
      state
      created_by {
        email
        id
      }
    }
  }
`;

// initiate task for new project
export const INITIATE_TASK_FOR_PROJECT = gql`
  mutation InitiateProjectStatus($projectId: Float!) {
    initiateProjectStatus(projectID: $projectId) {
      taskStatus {
        name
      }
    }
  }
`;
