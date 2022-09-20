import React from 'react';
import {
  Typography, Card, Row, Col,
} from 'antd';
import {
  HomeOutlined, LinkedinOutlined, MailOutlined, InstagramOutlined, FacebookOutlined, PhoneOutlined,
} from '@ant-design/icons';
import contactImage from '../assets/contact.svg';

function Contact() {
  const { Title } = Typography;

  const contactCardStyle = {
    border: 0,
    marginTop: '2rem',
    backgroundColor: 'transparent',
    width: '100%',
  };

  const contactCardRowStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: '0 2rem',
  };

  const contactCardGridStyle = {
    width: '90%',
    backgroundColor: 'white',
    textAlign: 'center',
  };

  return (
    <div className="__contact">
      <Title level={1}>Contact Us</Title>
      <img src={contactImage} alt="contact__image" />
      <Card style={contactCardStyle}>
        <Row style={contactCardRowStyle}>
          <Col xl={8}>
            <Card.Grid style={contactCardGridStyle}>
              <Title>Our Office</Title>
              <p>
                <HomeOutlined />
                Office Address
              </p>
            </Card.Grid>
          </Col>
          <Col xl={8}>
            <Card.Grid style={contactCardGridStyle}>
              <Title>Media Social</Title>
              <p>
                <LinkedinOutlined />
                Linkedin Profile
              </p>
              <p>
                <InstagramOutlined />
                Instagram Profile
              </p>
              <p>
                <FacebookOutlined />
                Facebook Profile
              </p>
            </Card.Grid>
          </Col>
          <Col xl={8}>
            <Card.Grid style={contactCardGridStyle}>
              <Title>Contact Line</Title>
              <p>
                <MailOutlined />
                E-Mail
              </p>
              <p>
                <PhoneOutlined />
                Phone
              </p>
            </Card.Grid>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Contact;
