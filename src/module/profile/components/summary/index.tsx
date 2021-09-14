import { Divider } from "antd";
import styled from "styled-components";

interface SummaryProps {
  summary: string[];
}

const SummaryList = styled.ul`
  padding: 2rem 1.6rem 0 2rem;
  font-size: 13px;

  li {
    padding-bottom: 12px;
  }
`;
const Header = styled.h1`
  font-size: 3rem;
`;
const Summary = (props: SummaryProps) => {
  const { summary } = props;
  return (
    <>
      <Header>Summary</Header>
      <Divider style={{ margin: "8px" }} />
      <SummaryList>
        {summary.map((list) => {
          return <li>{list}</li>;
        })}
      </SummaryList>
    </>
  );
};
export default Summary;
