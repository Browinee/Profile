import {Work} from "../../../../../types/user";
import {Container} from "./components/StyledComponent";
import Modal from "../../../../../components/Modal";
import {Button, Checkbox, DatePicker, Form, Input, Upload} from "antd";
import React, {useCallback, useMemo, useState} from "react";
import {UploadOutlined} from "@ant-design/icons";
import {dateFormat, DefaultCompanyInfo} from "../../../constants";
import moment, {Moment} from "moment";
import {workAdapter} from "../../../adapter";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {UploadChangeParam} from "antd/lib/upload/interface";
import {getBase64} from "../../../../../utils/base64";

const {RangePicker} = DatePicker;

interface ExperienceFormProps {
    workExperience: Work;
    cancelHandler: () => void;
    confirmHandler: (workId: string, value: any) => void;
    deleteHandler: (workId: string) => void;
    isNew?: boolean;
}

export interface FormProps extends Work {
    period: [Moment, Moment];
}

const transformDate = (workExperience: Work) => {
    const {isCurrent} = workExperience;
    return {
        ...workExperience,
        period: [
            moment(workExperience.startDate, dateFormat),
            moment(isCurrent ? new Date() : workExperience.startDate, dateFormat),
        ] as [Moment, Moment],
    };
};

const ExperienceForm = (props: ExperienceFormProps) => {
    const {workExperience = DefaultCompanyInfo, cancelHandler, confirmHandler, isNew = false, deleteHandler} = props;
    const [localWorkExperience, setLocalWorkExperience] = useState(transformDate(workExperience));

    const [formRef] = Form.useForm();
    const onCancelHandler = useCallback(() => {
        cancelHandler();
    }, []);
    const onConfirmHandler = useCallback(async () => {
        try {
            await formRef.validateFields();
            const value = formRef.getFieldsValue();
            // hack for antd
            const result = workAdapter({...localWorkExperience, ...value, companyLogo: localWorkExperience.companyLogo});
            confirmHandler(result.id, result);
            cancelHandler();
        } catch (e) {
            console.error("Form error", e);
        }
    }, [confirmHandler, workAdapter, localWorkExperience]);

    const checkHandler = useCallback(
        (e: CheckboxChangeEvent) => {
            const checked = e.target.checked;
            setLocalWorkExperience(prev => {
                const period = prev.period;
                return {
                    ...prev,
                    isCurrent: checked,
                    period: [period[0], moment(new Date(), dateFormat)],
                };
            });
        },
        [setLocalWorkExperience]
    );

    const [isDeleteNoti, setIsDeleteNoti] = useState(false);
    const toggleConfirmDeleteHandler = useCallback(() => {
        setIsDeleteNoti(prev => !prev);
    }, [setIsDeleteNoti]);

    const onConfirmDeleteHandler = useCallback(() => {
        deleteHandler(workExperience.id);
        toggleConfirmDeleteHandler();
        onCancelHandler();
    }, [workExperience.id, toggleConfirmDeleteHandler, onCancelHandler]);

    const ModalFooter = useMemo(() => {
        return [
            !isNew && (
                <Button key="delete" danger onClick={toggleConfirmDeleteHandler}>
                    Delete
                </Button>
            ),
            <Button key="cancel" onClick={onCancelHandler}>
                Cancel
            </Button>,
            <Button key="confirm" type="primary" onClick={onConfirmHandler}>
                Confirm
            </Button>,
        ];
    }, [onCancelHandler, onConfirmHandler]);

    const onUploadHandler = useCallback(
        (info: UploadChangeParam) => {
            return getBase64(info.file.originFileObj, imageUrl => {
                setLocalWorkExperience(prev => {
                    return {
                        ...prev,
                        companyLogo: imageUrl || "",
                    };
                });
            });
        },
        [setLocalWorkExperience, getBase64]
    );

    return (
        <>
            <Modal
                cancelHandler={onCancelHandler}
                title={localWorkExperience.company || "New Experience"}
                width={600}
                footer={ModalFooter}
            >
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
                                    message: "Please enter title.",
                                },
                            ]}
                        >
                            <Input allowClear bordered placeholder="Company(Required)." />
                        </Form.Item>
                        <Form.Item
                            name="period"
                            rules={[
                                {
                                    type: "array",
                                    required: true,
                                    message: "Please select time!",
                                },
                            ]}
                        >
                            <RangePicker
                                defaultValue={localWorkExperience.period}
                                disabled={[false, localWorkExperience.isCurrent]}
                            />
                        </Form.Item>
                        <Checkbox onChange={checkHandler} checked={localWorkExperience.isCurrent}>
                            I currently work here.
                        </Checkbox>
                        <Form.Item name="companyLogo" getValueFromEvent={onUploadHandler}>
                            <Upload name="logo" listType="picture" multiple={false} action={""}>
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
            {isDeleteNoti && (
                <Modal height={100} title="" cancelHandler={toggleConfirmDeleteHandler} confirmHandler={onConfirmDeleteHandler}>
                    Are you sure you want to delte?
                </Modal>
            )}
        </>
    );
};

export default ExperienceForm;
