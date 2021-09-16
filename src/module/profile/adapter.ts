import {User, Work} from "../../types/user";
import moment from "moment";
import {dateFormat} from "./constants";
import {FormProps} from "./components/Template/Experience";
import {v4 as uuidv4} from "uuid";

export const adapterBasic = (userData: User | null) => {
    const {age = 0, github = "", name = "", email = ""} = userData || {};
    return {
        name,
        github,
        age,
        email,
    };
};

export const adapterSummary = (userData: User | null) => {
    const {summary = []} = userData || {};
    return summary;
};

export const adapterWorkExperience = (userData: User | null) => {
    const {workExperience = []} = userData || {};
    return workExperience;
};
export const workAdapter = (workExperience: FormProps): Work => {
    console.log("workExperience", workExperience);
    const {id, isCurrent, startDate, endDate} = workExperience;
    const transformedStartDate = moment(startDate).format(dateFormat);
    const transformedEndDate = isCurrent ? "PRESENT" : moment(endDate).format(dateFormat);
    return {
        ...workExperience,
        startDate: transformedStartDate,
        endDate: transformedEndDate,
        id: id === "" ? uuidv4() : id,
    };
};
