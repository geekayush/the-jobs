import React from 'react';
import { Button, Modal, Form, Input, Upload, Icon, message } from 'antd';

const CreateFormModal = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        dummyRequest = ({ file, onSuccess }) => {
            setTimeout(() => {
                onSuccess("ok");
            }, 0);
        };
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;

            return (
                <Modal
                    title="Apply for the job"
                    centered
                    visible={visible}
                    okText="Submit"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form>
                        <Form.Item label="First Name">
                            {getFieldDecorator('firstName', {
                                rules: [{ required: true, message: 'Please input your first name!' }],
                            })(
                                <Input placeholder="John" />
                            )}
                        </Form.Item>
                        <Form.Item label="Last Name">
                            {getFieldDecorator('lastName', {
                                rules: [{ required: true, message: 'Please input your Last name!' }],
                            })(
                                <Input placeholder="Doe" />
                            )}
                        </Form.Item>
                        <Form.Item label="Email ID">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input placeholder="johndoe@example.com" />)}
                        </Form.Item>
                        <Form.Item label="Resume">
                            {getFieldDecorator('upload', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please upload your Resume!',
                                    },
                                ],
                            })(
                                <Upload name="logo" customRequest={this.dummyRequest} listType="pdf">
                                    <Button>
                                        <Icon type="upload" /> Upload your file
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>
                    </Form >
                </Modal >
            );
        }
    },
);

export default class FormModal extends React.Component {

    state = {
        selectedFile: null,
        selectedFileList: [],
        visible: false
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
            message.success({ content: `Your application has been successfully submitted.`, duration: 10 })
        });
    };
    onChange = info => {
        const nextState = {};
        switch (info.file.status) {
            case "uploading":
                nextState.selectedFileList = [info.file];
                break;
            case "done":
                nextState.selectedFile = info.file;
                nextState.selectedFileList = [info.file];
                break;

            default:
                // error or removed
                nextState.selectedFile = null;
                nextState.selectedFileList = [];
        }
        this.setState(() => nextState);
    };
    openFeedback = () => {
    }
    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div>
                <Button type="primary" style={{ float: "right" }} onClick={this.showModal}>
                    Apply
                </Button>
                <CreateFormModal
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}