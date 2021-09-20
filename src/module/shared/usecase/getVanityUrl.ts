import http from "../../../infra/http";

interface GetVanityUrlInfoProps {
    params: {
        id: string;
    };
}

const GetVanityUrlInfo = (urlParams: GetVanityUrlInfoProps): Promise<any> => {
    return http.get(`/vanityUrl`, urlParams).then((res: any) => {
        return res;
    });
};
export default GetVanityUrlInfo;
