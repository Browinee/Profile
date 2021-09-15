import { Work, WorkItem } from "../../../../../types/user";
import { Container } from "./components/StyledComponent";
import Modal from "../../../../../components/Modal";
import { Form, Input } from "antd";
import React, { useState } from "react";
import CompanyList from "./components/CompanyList";
import CompanyInfo from "./components/CompanyInfo";

interface ExperienceFormProps {
  workExperience: Work[];
  cancelHandler: () => void;
  confirmHandler: (value: any) => void;
}
const DefaultCompanyInfo: Work = {
  id: "",
  company: "",
  companyLogo: "",
  title: "",
  description: [],
  startDate: new Date().toLocaleDateString(),
  endDate: new Date().toLocaleDateString(),
};
const companyListAdapter = (workExperience: Work[] = []) => {
  return workExperience.map((work) => ({ id: work.id, company: work.company }));
};

const ExperienceForm = (props: ExperienceFormProps) => {
  const { workExperience, cancelHandler, confirmHandler } = props;
  const [changingWork, setChangingWork] = useState(workExperience);
  const onCancelHandler = () => {
    cancelHandler();
  };
  const onConfirmHandler = async () => {
    try {
      // confirmHandler({ summary: formData });
      cancelHandler();
    } catch (e) {
      console.error("Form error", e);
    }
  };
  const removeCompany = (id: string) => {
    const newChangingWork = changingWork.filter((work) => work.id !== id);
    setChangingWork(newChangingWork);
  };

  const [selectedCompany, setSelectedCompany] = useState<Work | undefined>(
    workExperience[0]
  );
  const selectCompany = (id: string) => {
    const company = changingWork.find((work) => work.id === id);
    setSelectedCompany(company);
    console.log("company, compa, compay", company);
  };

  const [formRef] = Form.useForm();

  return (
    <Modal
      title={"Experience"}
      cancelHandler={onCancelHandler}
      confirmHandler={onConfirmHandler}
      width={600}
    >
      <Container>
        <CompanyList
          companyList={companyListAdapter(changingWork)}
          removeCompany={removeCompany}
          selectCompany={selectCompany}
        />
        <CompanyInfo
          companyInfo={selectedCompany || DefaultCompanyInfo}
          formRef={formRef}
        />
      </Container>
    </Modal>
  );
};

export default ExperienceForm;
