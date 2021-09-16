import {Work} from "../../types/user";

export const RESUME_MAPS = {
    basic: "basic",
    summary: "summary",
    experience: "experience",
};
export const dateFormat = "YYYY-MM-DD";

export const DefaultCompanyInfo: Work = {
    id: "",
    company: "",
    companyLogo: "",
    title: "",
    description: "",
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
    isCurrent: false,
};
