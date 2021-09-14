import { User } from "../../types/user";

export const adapterBasic = (userData: User | null) => {
  const { age = 0, github = "", name = "", email = "" } = userData || {};
  return {
    name,
    github,
    age,
    email,
  };
};

export const adapterSummary = (userData: User | null) => {
  const { summary = [] } = userData || {};
  return summary;
};
