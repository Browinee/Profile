import React from "react";
import styled from "styled-components";
import {useAuth} from "../../../auth/context/auth-context";
import {Button} from "antd";
import {down} from "styled-breakpoints";

interface HeaderProps {
    logout: () => void;
}

const Container = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    width: 100%;
    background: white;
    border-bottom: 1px solid rgb(198, 198, 198);
    height: 6rem;
    z-index: 2;
    padding: 1rem 2rem;
    > button {
        margin-right: 1rem;
    }
    ${down("md")} {
        justify-content: center;
    }
`;

const Header = (props: HeaderProps) => {
    const {logout} = props;
    return (
        <Container>
            <Button onClick={logout} shape="round">
                Logout
            </Button>

            <Button onClick={() => {}} shape="round">
                Share Link
            </Button>
        </Container>
    );
};

export default Header;
