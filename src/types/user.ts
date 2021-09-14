export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
  permission: string[];
  age: number;
  workExperience: Work[];
  avatar: string;
  github: string;
}

export interface Work {
  startData: string;
  endDate: string;
  title: string;
  company: string;
  companyLogo: string;
  description: WorkItem[];
}

export interface WorkItem {
  title: string;
  item: string[];
}
