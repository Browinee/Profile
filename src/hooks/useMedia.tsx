import {useCallback, useEffect, useState} from "react";

const useMedia = (query: string) => {
    const [isMatched, setIsMatched] = useState(window.matchMedia(query).matches);

    const matchMediaHandler = useCallback(() => {
        const matched = window.matchMedia(query).matches;
        setIsMatched(matched);
    }, [setIsMatched]);

    useEffect(() => {
        window.addEventListener("resize", matchMediaHandler);
        return () => {
            window.removeEventListener("resize", matchMediaHandler);
        };
    }, [matchMediaHandler]);
    return isMatched;
};
export default useMedia;
