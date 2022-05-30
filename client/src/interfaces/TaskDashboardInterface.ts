export interface TaskDashboardInterface {
  id: number;
  name: string;
  title: string;
  due_date: Date;
  project: {
    title: string;
  };
}
