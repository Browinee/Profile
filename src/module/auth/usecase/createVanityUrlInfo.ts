import http from "../../../infra/http";
import {VanityUrlProps} from "../../../server/data/vanityUrl";

const CreateVanityUrlInfo = (vanityUrlInfo: VanityUrlProps): Promise<void> => {
    return http.post("/vanityUrl", vanityUrlInfo);
};
export default CreateVanityUrlInfo;
