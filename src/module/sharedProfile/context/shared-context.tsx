import React, {ReactNode, useCallback, useContext} from "react";
import useAsync from "../../../hooks/useAsync";
import useMount from "../../../hooks/useMount";
import GetVanityUrlInfo from "../usecase/getVanityUrl";
import {useParams} from "react-router";
import UrlNotFound from "../components/UrlNotFound";
import {VanityUrlProps} from "../../../types/vanityUrl";

export interface SharedContextProps {
    vanityUrlInfo: VanityUrlProps | null;
    isShared: boolean;
}

const SharedContext = React.createContext<SharedContextProps | undefined>(undefined);
SharedContext.displayName = "SharedContext";

const bootstrap = async (id: string) => {
    return GetVanityUrlInfo({params: {id}});
};

export const SharedProvider = ({children}: {children: ReactNode}) => {
    const {data: vanityUrlInfo, run, error} = useAsync<VanityUrlProps | null>();
    const {id} = useParams<{id: string}>();
    useMount(
        useCallback(() => {
            run(bootstrap(id));
        }, [id])
    );
    return (
        <SharedContext.Provider
            value={{
                vanityUrlInfo,
                isShared: true,
            }}
        >
            {error && (error as any).status === 404 ? <UrlNotFound /> : children}
        </SharedContext.Provider>
    );
};

export const useShared = () => {
    const context = useContext(SharedContext);
    if (!context) {
        throw new Error("Shared context must be under AuthProvider");
    }
    return context;
};
