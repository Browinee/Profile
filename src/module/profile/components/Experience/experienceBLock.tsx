import { Work } from "../../../../types/user";
import { Card } from "antd";
import styled from "styled-components";
import Avatar from "../../../../components/Avatar";

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.8rem;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const List = styled.ul`
  padding: 1rem 1.6rem 0 2rem;
  font-size: 13px;

  li {
    padding-bottom: 12px;
  }
`;
const CompanyInfo = styled.p`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin-right: 0.5rem;
  }
`;
const DateInfo = styled.p``;
const Pre = styled.pre`
  font-size: 1.6rem;
  overflow: hidden;
  //white-space: pre-wrap;       /* Since CSS 2.1 */
  text-align: left;
  white-space: pre-line;
`;
const Main = styled.main``;
const ExperienceBLock = (work: Work) => {
  const {
    startDate = "",
    endDate = "",
    title = "",
    company = "",
    companyLogo = "",
    description = "",
  } = work;
  return (
    <Card>
      <Header>
        <CompanyInfo>
          <Avatar imageUrl={companyLogo} size={18} />
          <span>{company}</span>
          <span>:</span>
          <span>{title}</span>
        </CompanyInfo>
        <DateInfo>
          {startDate}~{endDate}
        </DateInfo>
      </Header>
      <Main>
        <Pre>{description}</Pre>
      </Main>
    </Card>
  );
};

export default ExperienceBLock;
