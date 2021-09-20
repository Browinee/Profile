import http from "../../../infra/http";
import {VanityUrlProps} from "../../../server/data/vanityUrl";
import {PERMISSION} from "../../auth/permissionList";

interface GetVanityUrlInfoProps {
    params: {
        id: string;
    };
}

const GetVanityUrlInfo = (urlParams: GetVanityUrlInfoProps): Promise<any> => {
    console.log("GetVanityUrlInfo", urlParams);
    return http.get(`/vanityUrl`, urlParams).then((res: any) => {
        return res;
    });
};
export default GetVanityUrlInfo;
