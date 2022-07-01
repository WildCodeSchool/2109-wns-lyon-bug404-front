export interface ProjectIColumnInterface {
  //   id: number;
  //   name: string;
  //   tasks: Array<{
  //     assigned_to: any;
  //     due_date: Date;
  //     id: number;
  //     title: string;
  //   }>;
  id: number;
  name: string;
  tasks: {
    assigned_to: null;
    due_date: string;
    id: string;
    title: string;
  }[];
}
