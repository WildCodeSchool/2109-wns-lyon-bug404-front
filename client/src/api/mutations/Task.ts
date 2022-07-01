import { gql } from '@apollo/client';

export const DELETE_TASK = gql`
  mutation DeleteTask($taskId: String!) {
    deleteTask(taskID: $taskId) {
      id
    }
  }
`;

export const UPDATE_TASK_STATUS = gql`
  mutation ChangeStatusToTask(
    $statusName: String!
    $taskId: Float!
    $projectId: Float!
  ) {
    changeStatusToTask(
      statusName: $statusName
      taskID: $taskId
      projectID: $projectId
    ) {
      title
    }
  }
`;
