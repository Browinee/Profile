import React, {useState} from "react";
import {Checkbox, Form, FormInstance, Input} from "antd";
import {VanityUrlProps} from "../../../../server/data/vanityUrl";
import {PERMISSION_MAP} from "../../../auth/permissionList";

interface VanityUrlFormProps {
    formRef: FormInstance;
}
function VanityUrlForm(props: VanityUrlFormProps) {
    const {formRef} = props;
    const [formValue] = useState<VanityUrlProps[]>([{id: "", permission: []}]);
    return (
        <Form form={formRef} initialValues={formValue}>
            <Form.Item name={"id"} rules={[{required: true, message: "Please enter vanity url"}]}>
                <Input placeholder={"Please enter url"} type="text" id={"id"} />
            </Form.Item>
            <Form.Item name={"permission"} rules={[{required: true, message: "Please select which part is visible."}]}>
                <Checkbox.Group>
                    <Checkbox
                        value={PERMISSION_MAP.AVATAR_VIEW}
                        style={{
                            lineHeight: "32px",
                        }}
                    >
                        Avatar
                    </Checkbox>
                    <Checkbox
                        value={PERMISSION_MAP.BASIC_INFO_VIEW}
                        style={{
                            lineHeight: "32px",
                        }}
                    >
                        Basic information
                    </Checkbox>
                    <Checkbox
                        value={PERMISSION_MAP.SUMMARY_VIEW}
                        style={{
                            lineHeight: "32px",
                        }}
                    >
                        Summary
                    </Checkbox>
                    <Checkbox
                        value={PERMISSION_MAP.EXPERIENCE_VIEW}
                        style={{
                            lineHeight: "32px",
                        }}
                    >
                        Experience
                    </Checkbox>
                </Checkbox.Group>
            </Form.Item>
        </Form>
    );
}

export default VanityUrlForm;
