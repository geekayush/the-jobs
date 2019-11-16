import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import reactHtmlParser from 'react-html-parser';
import FormModal from '../components/FormModal';
import {
    Layout,
    Breadcrumb,
} from 'antd';

const { Header, Footer, Content } = Layout;

export default function Job() {

    const jobId = useSelector(state => state.jobId);
    const jobList = useSelector(state => state.jobList);
    const job = jobList.filter(obj => {
        return obj.id === jobId
    })[0];
    return (
        <Layout className="layout">
            <Header>
                <Link to='/'><h1 className="logo">The Jobs</h1></Link>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Link to='/'><Breadcrumb.Item>Home</Breadcrumb.Item></Link>
                    <Breadcrumb.Item>Job</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    <img src={job.company_logo} alt={job.company} className="job-logo" />
                    <FormModal></FormModal>
                    {/* <Modal
                        title="Apply for the job"
                        centered
                        visible={modalVisible}
                        okButtonProps={{ disabled: true }}
                        cancelButtonProps={{ disabled: true }}
                    // onOk={() => { setModalVisible(false); openFeedback() }}
                    // onCancel={() => setModalVisible(false)}
                    >
                        <HorizontalLoginForm />
                    </Modal> */}
                    <h1 className="ant-card-meta-title">{job.title}</h1>
                    <p>Company: {job.company}</p>
                    <p>Type: {job.type}</p>
                    <p>Location: {job.location}</p>
                    <p>Posted: {job.created_at}</p>
                    {reactHtmlParser(job.description)}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>The Jobs ©2019</Footer>
        </Layout >
    )
}