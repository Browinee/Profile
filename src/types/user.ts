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
  summary: string[];
}

export interface Work {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  companyLogo: string;
  description: string;
  isCurrent: boolean;
}

export interface WorkItem {
  title: string;
  item: string[];
}
