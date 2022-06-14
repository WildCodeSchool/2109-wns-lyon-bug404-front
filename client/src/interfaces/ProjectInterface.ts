export interface ProjectInterfaceList {
  id: number;
  title: string;
  description: string;
  state: string;
  created_by: {
    firstName: string;
    familyName: string;
  };
}
