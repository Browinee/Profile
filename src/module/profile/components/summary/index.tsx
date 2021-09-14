import { Divider } from "antd";
import styled from "styled-components";
import { FeatureToggle } from "../../../auth/auth";
import { PERMISSION_MAP } from "../../../auth/permissionList";
import EditIcon from "../../../../components/EditIcon";
import { useCallback } from "react";
import { RESUME_MAPS } from "../../constants";

interface SummaryProps {
  summary: string[];
  editHandler: (type: string) => void;
}

const SummaryList = styled.ul`
  padding: 2rem 1.6rem 0 2rem;
  font-size: 13px;
  min-height: 300px;

  li {
    padding-bottom: 12px;
  }
`;
const Header = styled.h1`
  font-size: 3rem;
`;
const Summary = (props: SummaryProps) => {
  const { summary, editHandler } = props;
  const clickHandler = useCallback(() => {
    editHandler(RESUME_MAPS.summary);
  }, []);
  return (
    <>
      <Header>
        Summary
        <FeatureToggle permissions={[PERMISSION_MAP.SUMMARY_EDIT]}>
          <EditIcon openEditModal={clickHandler} />
        </FeatureToggle>
      </Header>
      <Divider style={{ margin: "8px" }} />
      <SummaryList>
        <FeatureToggle permissions={[PERMISSION_MAP.SUMMARY_VIEW]}>
          {summary.map((list) => {
            return <li key={list}>{list}</li>;
          })}
        </FeatureToggle>
      </SummaryList>
    </>
  );
};
export default Summary;
