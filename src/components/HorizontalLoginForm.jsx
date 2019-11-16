import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Upload } from 'antd'
const FormItem = Form.Item

class LoginForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <Form inline onSubmit={this.handleSubmit}>
                <FormItem label="First Name">
                    {getFieldDecorator('firstName', {
                        rules: [{ required: true, message: 'Please input your first name!' }],
                    })(
                        <Input placeholder="John" />
                    )}
                </FormItem>
                <FormItem label="Last Name">
                    {getFieldDecorator('lastName', {
                        rules: [{ required: true, message: 'Please input your Last name!' }],
                    })(
                        <Input placeholder="Doe" />
                    )}
                </FormItem>
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
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                        rules: [
                            {
                                required: true,
                                message: 'Please upload your Resume!',
                            },
                        ],
                    })(
                        <Upload name="logo" action="#" listType="pdf">
                            <Button>
                                <Icon type="upload" /> Upload your file
                            </Button>
                        </Upload>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button style={{ float: "right" }} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        )
    }
}

const HorizontalLoginForm = Form.create({ name: 'login' })(LoginForm)

export default HorizontalLoginForm;