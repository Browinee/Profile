const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
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
