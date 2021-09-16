import {Work} from "../../../../../types/user";
import {Container} from "./components/StyledComponent";
import Modal from "../../../../../components/Modal";
import {Button, DatePicker, Form, Input, Upload} from "antd";
import React, {useEffect, useState} from "react";
import {UploadOutlined} from "@ant-design/icons";
import {dateFormat, DefaultCompanyInfo} from "../../../constants";
import moment, {Moment} from "moment";
import {workAdapter} from "../../../adapter";

interface ExperienceFormProps {
    workExperience: Work;
    cancelHandler: () => void;
    confirmHandler: (workId: string, value: any) => void;
}

export interface FormProps extends Omit<Work, "startDate" | "endDate"> {
    startDate: Moment;
    endDate: Moment;
}

const transformDate = (workExperience: Work) => {
    const {isCurrent} = workExperience;
    return {
        ...workExperience,
        startDate: moment(workExperience.startDate, dateFormat),
        endDate: moment(isCurrent ? new Date() : workExperience.startDate, dateFormat),
    };
};

const ExperienceForm = (props: ExperienceFormProps) => {
    const {workExperience = DefaultCompanyInfo, cancelHandler, confirmHandler} = props;
    console.log();
    const [localWorkExperience, setLocalWorkExperience] = useState(transformDate(workExperience));
    useEffect(() => {
        setLocalWorkExperience(transformDate(workExperience));
    }, [workExperience.id]);

    const [formRef] = Form.useForm();
    const onCancelHandler = () => {
        cancelHandler();
    };
    const onConfirmHandler = async () => {
        try {
            await formRef.validateFields();
            const value = formRef.getFieldsValue();
            // parse Date
            const result = workAdapter(value);
            confirmHandler(result.id, result);
            cancelHandler();
        } catch (e) {
            console.error("Form error", e);
        }
    };

    const logoChangeHandler = (e: any) => {
        return e.file.thumbUrl;
    };
    return (
        <Modal title={localWorkExperience.company} cancelHandler={onCancelHandler} confirmHandler={onConfirmHandler} width={600}>
            <Container>
                <Form form={formRef} initialValues={localWorkExperience} requiredMark={true}>
                    <Form.Item name="id" style={{display: "none"}}></Form.Item>
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
                        name="startDate"
                        label="From"
                        rules={[
                            {
                                type: "object",
                                required: true,
                                message: "Date(Required)",
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name="endDate"
                        label="To"
                        rules={[
                            {
                                type: "object",
                                required: true,
                                message: "Date(Required)",
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="companyLogo" getValueFromEvent={logoChangeHandler}>
                        <Upload name="logo" listType="picture" multiple={false}>
                            <Button icon={<UploadOutlined />}>
                                {workExperience.companyLogo === "" ? "Upload" : "Update"} Company Logo
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
