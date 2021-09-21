import {useCallback, useEffect, useState} from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const setOnline = useCallback(() => {
        setIsOnline(true);
    }, [setIsOnline]);
    const setOffline = useCallback(() => {
        setIsOnline(false);
    }, [setIsOnline]);
    useEffect(() => {
        window.addEventListener("offline", setOffline);
        window.addEventListener("online", setOnline);

        return () => {
            window.removeEventListener("offline", setOffline);
            window.removeEventListener("online", setOnline);
        };
    }, [setOffline, setOnline]);
    return isOnline;
};

export default useOnline;
