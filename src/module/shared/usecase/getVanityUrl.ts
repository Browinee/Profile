import http from "../../../infra/http";
import {VanityUrlProps} from "../../../server/data/vanityUrl";
import {PERMISSION} from "../../auth/permissionList";
import {User} from "../../../types/user";

interface GetVanityUrlInfoProps {
    params: {
        id: string;
    };
}

const GetVanityUrlInfo = (urlParams: GetVanityUrlInfoProps): Promise<any> => {
    return Promise.resolve().then(() => ({url: "test", permission: PERMISSION.slice(3)}));
    // return http.get("/vanityUrl", urlParams).then((res: VanityUrlProps[]) => {
    //
    //
    // });
};
export default GetVanityUrlInfo;
