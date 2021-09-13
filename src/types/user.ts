export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
  permission: string[];
  age: number;
  workExperience: Work[];
  avatar: string;
}

interface Work {
  startData: string;
  endDate: string;
  title: string;
  company: string;
  companyLogo: string;
  description: string;
}
