import { User } from "../../../../types/user";
import styled from "styled-components";
import EditIcon from "../../../../components/EditIcon";
import { FeatureToggle } from "../../../auth/auth";
import { PERMISSION_MAP } from "../../../auth/permissionList";
import { useCallback } from "react";
import { RESUME_MAPS } from "../../constants";

interface BaseInfoProps {
  user: User | null;
  editHandler: (type: string) => void;
}

const Container = styled.div`
  padding-top: 48px;
`;
const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-right: 1rem;
  color: white;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
`;
const Content = styled.ul`
  padding: 2rem 1.6rem 0 2rem;
  font-size: 13px;
  list-style: none;

  li {
    padding-bottom: 12px;
  }
`;

function InfoBlock(props: BaseInfoProps) {
  const { user, editHandler } = props;
  const clickHandler = useCallback(() => {
    editHandler(RESUME_MAPS.basic);
  }, []);
  return (
    <Container>
      <Header>
        <Title>Basic Info</Title>
        <FeatureToggle permissions={[PERMISSION_MAP.BASIC_INFO_EDIT]}>
          <EditIcon openEditModal={clickHandler} />
        </FeatureToggle>
      </Header>
      <FeatureToggle permissions={[PERMISSION_MAP.BASIC_INFO_VIEW]}>
        <Content>
          <li>Name: {user?.name || "--"}</li>
          <li>Age: {user?.age || "--"}</li>
          <li>Email: {user?.email || "--"}</li>
          <li>
            Github:{" "}
            <a href={user?.github || ""} target={"_blank"} rel="noreferrer">
              {user?.github || ""}
            </a>
          </li>
        </Content>
      </FeatureToggle>
    </Container>
  );
}

export default InfoBlock;
