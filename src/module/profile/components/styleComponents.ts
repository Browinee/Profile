import styled from "styled-components";
import {down} from "styled-breakpoints";

export const Container = styled.main`
    width: 100vw;
    height: calc(100vh - 6rem);
    background: white;
    display: flex;
    margin-top: 6rem;
    position: relative;
`;
export const Basic = styled.aside<{showBasic?: boolean}>`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: width 0.5s ease;

    &.closed {
        width: 0;
    }
`;

export const WorkExperience = styled.div`
    width: calc(100% - 300px);
    height: 100%;
    overflow-x: auto;
    padding: 10px;

    ${down("md")} {
        width: 100%;
    }
`;
export const AvatarContainer = styled.div`
    width: 100%;
    height: 180px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Bar = styled.div`
    width: 100%;
    height: 32px;
    background-color: rgb(250, 225, 4);
`;
export const BasicInfo = styled.div`
    width: 100%;
    color: #fff;
    background-color: #01426f;
    height: 100%;
`;

export const StyledSidebarButton = styled.button<{showBasic: boolean}>`
    position: absolute;
    top: 40px;
    left: 0;
    height: 35px;
    background: #777;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    width: 0;
    overflow: hidden;
    transition: width 1s ease;

    ${down("sm")} {
        width: 25px;
    }

    svg {
        transform: ${(props): string => `rotate(${props.showBasic ? "180deg" : "0"})`};
    }
`;
