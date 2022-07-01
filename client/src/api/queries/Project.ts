import { gql } from '@apollo/client';

// get projects
export const GET_ALL_PROJECTS = gql`
  query getProjects {
    getProjects {
      id
      title
      description
      state
      created_by {
        firstName
        familyName
      }
    }
  }
`;

// get one project
export const GET_ONE_PROJECT = gql`
  query GetProject($projectId: Float!) {
    getProject(projectID: $projectId) {
      id
      title
      description
      # image_url
      start_date
      end_date
      state
      created_by {
        email
        firstName
        familyName
        role
      }
      assigned_users {
        email
        firstName
        familyName
        role
      }
      tasks {
        id
        title
        description
        due_date
      }
      files {
        publicUrl
        filename
      }
    }
  }
`;
