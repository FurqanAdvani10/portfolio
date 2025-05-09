import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
// import Logo from '../../assets/logowhite.png';
import "./footer.css";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Footer = () => {

const navigate = useNavigate()

    return (
        <>
            <Layout.Footer className="footer" style={{   }}>
                <Container>
                    <div className="footer-container">
                        <div className="footer-icon">
                            <h3 className='p-0 m-0'>furqan.</h3>
                        </div>
                        <div className="footer-links">
                            <a href="#" onClick={() => navigate('/')}>Home</a>
                            <a href="#" onClick={() => navigate('/about')}>About</a>
                            <a href="#" onClick={() => navigate('/work')}>Work</a>
                            <a href="#" onClick={() => navigate('/services')}>Services</a>
                            <a href="#" onClick={() => navigate('/contact')}>Contact</a>
                        </div>
                    </div>
                </Container>
            </Layout.Footer>

            <div className="footer-content">
                <Container >
                        <div className="sub-footer-content">
                            <div className="footer-text">
                                <Text style={{ color: '#ffff' }}>
                                    © {new Date().getFullYear()} Portfolio. All Rights Reserved.
                                </Text>
                            </div>
                        </div>

                </Container>
            </div>

        </>
    );
}

export default Footer;