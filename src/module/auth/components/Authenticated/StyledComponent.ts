import styled from "@emotion/styled";
import Row from "../../../../components/Row";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

export const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
export const HeaderLeft = styled(Row)``;
export const HeaderRight = styled.div``;
export const Main = styled.main`
  display: flex;
  overflow: hidden;
`;
