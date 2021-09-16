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
    const {id, isCurrent, period, ...rest} = workExperience;
    const transformedStartDate = moment(period[0]).format(dateFormat);
    const transformedEndDate = isCurrent ? "" : moment(period[1]).format(dateFormat);
    return {
        ...rest,
        startDate: transformedStartDate,
        endDate: transformedEndDate,
        id: id === "" ? uuidv4() : id,
        isCurrent,
    };
};
