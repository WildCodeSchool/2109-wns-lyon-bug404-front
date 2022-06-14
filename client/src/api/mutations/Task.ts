import { gql } from '@apollo/client';

export const DELETE_TASK = gql`
  mutation DeleteTask($taskId: String!) {
    deleteTask(taskID: $taskId) {
      id
    }
  }
`;
