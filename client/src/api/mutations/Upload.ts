import { gql } from '@apollo/client';

export const UPLOAD_FILE = gql`
  mutation AddProjectFile($file: Upload!, $projectId: Float!) {
    addProjectFile(data: { file: $file }, projectID: $projectId) {
      id
      filename
      publicUrl
    }
  }
`;
