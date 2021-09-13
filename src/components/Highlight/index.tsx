import React from "react";
import styled from "styled-components";

const Content = styled.div`
  color: red;
  margin: 1rem 0;
`;

const Highlight = (props: React.PropsWithChildren<any>) => {
  return <Content>{props.children}</Content>;
};

export default Highlight;
