import { Work } from "../../../../types/user";
import { Card } from "antd";
import styled from "styled-components";
import Avatar from "../../../../components/Avatar";
import { FeatureToggle } from "../../../auth/auth";
import { PERMISSION_MAP } from "../../../auth/permissionList";
import EditIcon from "../../../../components/EditIcon";
import { useCallback } from "react";
import { RESUME_MAPS } from "../../constants";

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.8rem;
`;
// const Container = styled.div`
//   width: 100%;
//   height: 100%;
// `;
// const List = styled.ul`
//   padding: 1rem 1.6rem 0 2rem;
//   font-size: 13px;
//
//   li {
//     padding-bottom: 12px;
//   }
// `;
const CompanyInfo = styled.p`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin-right: 0.5rem;
  }
`;
const DateInfo = styled.p`
  letter-spacing: 0.2rem;
`;
const Pre = styled.pre`
  font-size: 1.6rem;
  overflow: hidden;
  text-align: left;
  white-space: pre-line;
`;
const Main = styled.main``;
const EditorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface ExperienceBLockProps {
  work: Work;
  clickHandler: (templateType: string, workId: string) => void;
}

const ExperienceBLock = (props: ExperienceBLockProps) => {
  const { work, clickHandler } = props;
  const {
    startDate = "",
    endDate = "",
    title = "",
    company = "",
    companyLogo = "",
    description = "",
    isCurrent = false,
    id,
  } = work;
  const editorHandler = useCallback(() => {
    clickHandler(RESUME_MAPS.experience, id);
  }, [clickHandler, id]);
  return (
    <Card>
      <FeatureToggle permissions={[PERMISSION_MAP.SUMMARY_VIEW]}>
        <EditorContainer>
          <EditIcon size={16} openEditModal={editorHandler} />
        </EditorContainer>
      </FeatureToggle>
      <Header>
        <CompanyInfo>
          <Avatar imageUrl={companyLogo} size={18} />
          <span>{company}</span>
          <span>:</span>
          <span>{title}</span>
        </CompanyInfo>
        <DateInfo>
          {startDate}~{isCurrent ? "PRESENT" : endDate}
        </DateInfo>
      </Header>
      <Main>
        <Pre>{description}</Pre>
      </Main>
    </Card>
  );
};

export default ExperienceBLock;
