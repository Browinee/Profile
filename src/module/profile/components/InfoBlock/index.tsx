import { User } from "../../../../types/user";
import styled from "styled-components";
import EditIcon from "../../../../components/EditIcon";

interface BaseInfoProps {
  user: User | null;
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
  const { user } = props;
  return (
    <Container>
      <Header>
        <Title>Basic Info</Title>
        <EditIcon openEditModal={() => {}} />
      </Header>
      <Content>
        <li>Name: {user?.name || "--"}</li>
        <li>Age: {user?.age || "--"}</li>
        <li>
          Github:{" "}
          <a href={user?.github || ""} target={"_blank"} rel="noreferrer">
            {user?.github || ""}
          </a>
        </li>
      </Content>
    </Container>
  );
}

export default InfoBlock;
