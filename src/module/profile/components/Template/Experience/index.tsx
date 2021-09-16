import {Work} from "../../../../../types/user";
import {Container} from "./components/StyledComponent";
import Modal from "../../../../../components/Modal";
import {Button, DatePicker, Form, Input, Upload} from "antd";
import React, {useState} from "react";
import {UploadOutlined} from "@ant-design/icons";
import {dateFormat} from "../../../constants";
import moment from "moment";

const {RangePicker} = DatePicker;

interface ExperienceFormProps {
    workExperience: Work;
    cancelHandler: () => void;
    confirmHandler: (value: any) => void;
}

const ExperienceForm = (props: ExperienceFormProps) => {
    const {workExperience, cancelHandler} = props;
    const [localWorkExperience, setLocalWorkExperience] = useState(workExperience);
    const [formRef] = Form.useForm();
    const onCancelHandler = () => {
        cancelHandler();
    };
    const onConfirmHandler = async () => {
        try {
            // confirmHandler({ summary: formData });
            const value = formRef.getFieldsValue();
            // parse Date
            console.log("value", value);
            cancelHandler();
        } catch (e) {
            console.error("Form error", e);
        }
    };
    // const removeCompany = (id: string) => {
    //   const newChangingWork = changingWork.filter((work) => work.id !== id);
    //   setChangingWork(newChangingWork);
    // };
    //
    // const [selectedCompany, setSelectedCompany] = useState<Work | undefined>(
    //   workExperience[0]
    // );
    // const selectCompany = (id: string) => {
    //   const company = changingWork.find((work) => work.id === id);
    //   setSelectedCompany(company);
    //   console.log("company, compa, compay", company);
    // };

    const logoChangeHandler = (e: any) => {
        setLocalWorkExperience(prev => {
            return {
                ...prev,
                companyLogo: e.file.thumbUrl,
            };
        });
    };
    return (
        <Modal title={localWorkExperience.company} cancelHandler={onCancelHandler} confirmHandler={onConfirmHandler} width={600}>
            <Container>
                <Form form={formRef} initialValues={localWorkExperience} requiredMark={true}>
                    <Form.Item
                        name="company"
                        rules={[
                            {
                                required: true,
                                message: "Please enter company name",
                            },
                        ]}
                    >
                        <Input allowClear bordered placeholder="Company(Required)." />
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
                        <Input allowClear bordered />
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
                                moment(workExperience.startDate, dateFormat),
                                workExperience.isCurrent
                                    ? moment(new Date(), dateFormat)
                                    : moment(workExperience.endDate, dateFormat),
                            ]}
                        />
                    </Form.Item>
                    <Form.Item name="companyLogo" getValueFromEvent={logoChangeHandler}>
                        <Upload name="logo" listType="picture" multiple={false}>
                            <Button icon={<UploadOutlined />}>
                                {localWorkExperience.companyLogo === "" ? "Upload" : "Update"} Company Logo
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
                            allowClear
                            bordered
                            placeholder={"Describe your experience.(Required)"}
                            autoSize={{minRows: 10, maxRows: 20}}
                        />
                    </Form.Item>
                </Form>
            </Container>
        </Modal>
    );
};

export default ExperienceForm;
