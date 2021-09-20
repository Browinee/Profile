import LocalStorageDB, {SERVER_VANITY_INFO} from "../../infra/localStorageDB";

export interface VanityUrlProps {
    id: string;
    permission: string[];
}

const defaultVanityUrlInfo: VanityUrlProps[] = [];
const loaded = LocalStorageDB.load(SERVER_VANITY_INFO) || [];
const persist = () => LocalStorageDB.save(SERVER_VANITY_INFO, [...defaultVanityUrlInfo, ...loaded]);
try {
    persist();
} catch (error) {
    console.log("Load vanity url error", error);
}

export default class VanityUrlDB {
    static async saveVanityUrlInfo(vanityUrlInfo: VanityUrlProps) {
        const vanityUrlInfoArr = LocalStorageDB.load(SERVER_VANITY_INFO) as VanityUrlProps[];
        const oldOneIndex = vanityUrlInfoArr.findIndex(info => info.id === vanityUrlInfo.id);
        if (oldOneIndex === -1) {
            LocalStorageDB.save(SERVER_VANITY_INFO, [vanityUrlInfo, ...vanityUrlInfoArr]);
            return;
        }
        const newOne = {...vanityUrlInfoArr[oldOneIndex], ...vanityUrlInfo};
        vanityUrlInfoArr.splice(oldOneIndex, 1, newOne);
        LocalStorageDB.save(SERVER_VANITY_INFO, vanityUrlInfoArr);
    }

    static async getVanityUrlInfo(id: string | null) {
        const vanityInfos = LocalStorageDB.load(SERVER_VANITY_INFO);
        if (vanityInfos) {
            const target = (vanityInfos as VanityUrlProps[]).find(info => info.id === id);
            return target ? target : null;
        }
        return null;
    }
}
