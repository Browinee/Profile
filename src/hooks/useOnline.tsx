import {useCallback, useEffect, useState} from "react";

const useOnline = (cb: () => void) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const setOnline = useCallback(() => {
        setIsOnline(true);
        cb();
    }, [setIsOnline, cb]);
    const setOffline = useCallback(() => {
        cb();
        setIsOnline(false);
    }, [setIsOnline, cb]);
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
