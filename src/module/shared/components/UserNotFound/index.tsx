import React from "react";
import styled from "styled-components";
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
`;
const UserNotFound = () => (
    <Container>
        <h1>Ooops! This user is not existed</h1>
    </Container>
);

export default UserNotFound;
