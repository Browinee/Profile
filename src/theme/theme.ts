export const breakpoints = {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
};
type BreakPointsType = typeof breakpoints;

type themeProps = {
    breakpoints: BreakPointsType;
    colors: {
        [color: string]: string;
    };
};
const THEME: themeProps = {
    breakpoints,
    colors: {
        bluebell: "#979fd0",
    },
};
export default THEME;
