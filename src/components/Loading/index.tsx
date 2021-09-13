import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom:0;
  top: 0;
  width: 100%;
  height: 100%;
  
  div {
    width: 2rem;
    height: 2rem;
    margin: 2rem 0.3rem;
    background: ${(props) => props.theme.colors.bluebell};
    border-radius: 50%;
    animation: 0.9s ${bounce} infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}

`;

const Loading = () => {
  return (
    <Container>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default Loading;
