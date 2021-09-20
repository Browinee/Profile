import LocalStorageDB, {SERVER_VANITY_INFO} from "../../infra/localStorageDB";

const persist = () => LocalStorageDB.save(SERVER_VANITY_INFO, []);

try {
    persist();
} catch (error) {}

export interface VanityUrlProps {
    id: string;
    permission: string[];
}

export default class VanityUrlDB {
    static async saveVanityUrlInfo() {
        // const vanityInfo = LocalStorageDB.load(SERVER_VANITY_INFO);
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
