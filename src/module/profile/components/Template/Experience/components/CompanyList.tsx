import styled from "styled-components";
import { List } from "antd";
import { Work } from "../../../../../../types/user";
import { ListStyle } from "./StyledComponent";
import { MinusCircleOutlined } from "@ant-design/icons";
import React, { useCallback } from "react";

interface CompanyListProps {
  companyList: Pick<Work, "id" | "company">[];
  removeCompany: (id: string) => void;
  selectCompany: (id: string) => void;
}

const Container = styled.div`
  width: 30%;
  height: 100%;
  overflow-x: auto;
  border-right: 1px solid lightgray;
`;
const CompanyList = (props: CompanyListProps) => {
  const { companyList, removeCompany, selectCompany } = props;
  const removeCompanyHandler = useCallback(
    (companyId: string) => {
      removeCompany(companyId);
    },
    [companyList, removeCompany]
  );
  const selectCompanyHandler = (id: string) => {
    selectCompany(id);
  };
  return (
    <Container>
      <List
        dataSource={companyList}
        renderItem={(item: Pick<Work, "id" | "company">) => (
          <List.Item
            style={ListStyle}
            key={item.id}
            onClick={() => selectCompanyHandler(item.id)}
          >
            {item.company}
            <MinusCircleOutlined
              size={30}
              onClick={() => removeCompanyHandler(item.id)}
              style={{ marginLeft: "10px" }}
            />
          </List.Item>
        )}
      />
    </Container>
  );
};
export default CompanyList;
