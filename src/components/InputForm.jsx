import React from 'react';
import { Input, Upload, Button, message, Icon } from 'antd';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName, setEmail, setResume } from '../actions';


export default function InputForm() {
    const dispatch = useDispatch();

    const onChangeFirst = e => {
        dispatch(setFirstName(e.target.value));
    };

    const onChangeLast = e => {
        dispatch(setLastName(e.target.value));
    }

    const onChangeEmail = e => {
        dispatch(setEmail(e.target.value));
    }

    const onChangeResume = e => {
        dispatch(setResume(e.file.name))
    }

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file);
                onChangeResume(info);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <div>
            <Input style={{ marginBottom: "16px" }} placeholder="First Name" allowClear onChange={onChangeFirst} />
            <Input style={{ marginBottom: "16px" }} placeholder="Last Name" allowClear onChange={onChangeLast} />
            <Input style={{ marginBottom: "16px" }} placeholder="EmailID" allowClear onChange={onChangeEmail} />
            <Upload {...props}>
                <Button>
                    <Icon type="upload" /> Upload Resume
                </Button>
            </Upload>
        </div>
    )
}