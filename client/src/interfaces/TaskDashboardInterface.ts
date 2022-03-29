export interface TaskDashboardInterface {
  id: number;
  title: string;
  due_date: Date;
  project: {
    title: string;
  };
}
