import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, setJobList, setJobId } from '../actions';
import {
    Card,
    Icon,
    Avatar,
    Input,
    Layout,
    Breadcrumb,
    Row,
    Col,
    AutoComplete,
} from 'antd';
import Axios from 'axios';

const { Header, Footer, Content } = Layout;

const dataSource = ['JavaScript', 'Java', 'Python', 'CSS', 'PHP', 'Ruby', 'C++', 'C', 'Shell',
    'C#', 'Objective-C', 'R', 'VimL', 'Go', 'Perl', 'CoffeeScript', 'TeX', 'Swift', 'Scala',
    'Haskell', 'Lua', 'Clojure', 'Matlab', 'Arduino', 'Groovy', 'Puppet', 'Rust', 'PowerShell', 'Erlang',
    'Visual Basic', 'Processing', 'Assembly', 'TypeScript', 'XSLT', 'ActionScript', 'ASP', 'OCaml', 'D', 'Scheme', 'Dart'
    , 'Common Lisp', 'Julia', 'F#', 'Elixir', 'FORTRAN', 'Haxe', 'Racket', 'Logos', 'Node'];


const { Meta } = Card;


export default function Landing(props) {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const jobList = useSelector(state => state.jobList);

    const search = (value) => {
        setLoading(true);
        dispatch(setSearchTerm(value));
        Axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${value}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(data => {
            setLoading(false);
            dispatch(setJobList(data.data));
        });
    }

    const jobSelect = (value) => {
        dispatch(setJobId(value))
    }

    return (
        <Layout className="layout">
            <Header>
                <Link to='/'><h1 className="logo">The Jobs</h1></Link>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: '2rem 0' }}>
                    <Row>
                        <Col xs={24} sm={{ span: 12, offset: 6 }} md={{ span: 12, offset: 6 }} lg={{ span: 6, offset: 9 }}>
                            <AutoComplete
                                autoFocus='true'
                                style={{ width: "100%" }}
                                dataSource={dataSource}
                                placeholder="Enter your preferred language"
                                filterOption={(inputValue, option) =>
                                    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                                onSelect={(value) => search(value)}
                            >
                                <Input suffix={loading ? <Icon type="loading" className="certain-category-icon" /> : <Icon type="search" className="certain-category-icon" />} />
                            </AutoComplete>
                            {jobList != 0 ? <h4 style={{ margin: "8px 0", color: "#888", textAlign: "center" }}>{jobList.length} jobs found</h4> : null}
                        </Col>
                    </Row>
                </div>
                <div className="card-grid">
                    {jobList.map(job =>
                        <Card
                            className="card"
                            key={job.id}
                            style={{ width: 300 }}
                            actions={[
                                <Link to='/job' id={job.id} onClick={(e) => {
                                    jobSelect(e.currentTarget.id);
                                }}>
                                    <Icon type="arrow-right" key="more" />
                                </Link>
                            ]}
                        >
                            <Meta
                                avatar={<Avatar className="avatar" src={job.company_logo} />}
                                title={job.title}
                            />
                            <br />
                            <p className="job-subtitle">{job.company}&nbsp;&#9679;&nbsp;{job.type}&nbsp;&#9679;&nbsp;{job.location}</p>
                        </Card>
                    )
                    }
                </div >
            </Content >
            <Footer style={{ textAlign: 'center' }}>The Jobs ©2019</Footer>
        </Layout >
    )
}