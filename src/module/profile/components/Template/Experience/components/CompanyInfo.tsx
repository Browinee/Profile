import { Work } from "../../../../../../types/user";
import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Upload } from "antd";
import { dateFormat } from "../../../../constants";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";
import { FormInstance } from "antd/lib/form/hooks/useForm";

const { RangePicker } = DatePicker;

interface CompanyInfoProps {
  companyInfo: Work;
  formRef: FormInstance;
}

const CompanyInfo: React.FC<CompanyInfoProps> = (props) => {
  const { formRef, companyInfo } = props;
  const [localCompanyInfo, setLocalCompanyInfo] = useState(companyInfo);
  console.log("localCompanyInfo", localCompanyInfo);
  const logoChangeHandler = (e: any) => {
    setLocalCompanyInfo((prev) => {
      return {
        ...prev,
        companyLogo: e.file.thumbUrl,
      };
    });
  };
  console.log("companyInfo.companyLogo", companyInfo.companyLogo);

  return (
    <Form form={formRef} initialValues={localCompanyInfo} requiredMark={true}>
      <Form.Item
        name="company"
        rules={[
          {
            required: true,
            message: "Please enter company name",
          },
        ]}
      >
        <Input placeholder="Company(Required)." />
      </Form.Item>

      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: "Title(Required)",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="range-picker"
        rules={[
          {
            type: "array",
            required: true,
            message: "Date(Required)",
          },
        ]}
      >
        <RangePicker
          format={dateFormat}
          defaultValue={[
            moment(companyInfo.startDate, dateFormat),
            moment(companyInfo.endDate, dateFormat),
          ]}
        />
      </Form.Item>
      <Form.Item name="companyLogo" getValueFromEvent={logoChangeHandler}>
        <Upload name="logo" listType="picture" multiple={false}>
          <Button icon={<UploadOutlined />}>
            {companyInfo.companyLogo === "" ? "Upload" : "Update"} Company Logo
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name={"description"}
        rules={[
          {
            required: true,
            message: "Please describe your experience.",
          },
        ]}
      >
        <Input.TextArea
          placeholder={"Describe your experience.(Required)"}
          autoSize={{ minRows: 10, maxRows: 20 }}
        />
      </Form.Item>
    </Form>
  );
};
export default CompanyInfo;
