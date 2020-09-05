import React, {Component} from 'react';
import { Card, Col, Row } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Space, Upload, Popconfirm } from 'antd';
import { Typography } from 'antd';
import image1 from "../assets/images/image-currency.jpg"
import image2 from "../assets/images/image-restaurant.jpg"
import image3 from "../assets/images/image-plane.jpg"
import image4 from "../assets/images/image-confetti.jpg"
const { Text, Link } = Typography;
const { Title } = Typography;

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

class Content1 extends Component{
    render(){
        return(
            <React.Fragment>
<Content className="site-layout" style={{  marginTop: 64, marginBottom:64 }}>
<Title>Lasted Articles</Title>
      <div className="site-layout-background" style={{  minHeight: 380 }}>
      <div className="site-card-wrapper">
    <Row  justify='center' gutter={[16, 16]}>
      <Col xl={{span: 6}}>
      <Card
    hoverable
    style={{ width: 250 }}
    size={'small'}
    cover={<img alt="example" style={{height:'180px'}} src= {image1} />}
  > 
  <Space direction="vertical">
  <Text type="secondary">By Claire Robinson</Text>
  <Title level={5}>Receive money in any currency with no fees</Title>
  <Text type="secondary">
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</Text>
    </Space>
  </Card>
      </Col>
      <Col xl={{span: 6}}>
      <Card
    hoverable
    style={{ width: 250 }}
    size={'small'}
    cover={<img alt="example" style={{height:'180px'}} src= {image2} />}
  > 
  <Space direction="vertical">
  <Text type="secondary">By Wilson Hutton</Text>
  <Title level={5}> Treat yourself without worrying about money</Title>
  <Text type="secondary">  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …</Text>
    </Space>
  </Card>
      </Col>
      <Col xl={{span: 6}}>
      <Card
    hoverable
    style={{ width: 250 }}
    size={'small'}
    cover={<img alt="example" style={{height:'180px'}} src= {image3} />}
  > 
  <Space direction="vertical">
  <Text type="secondary">By Wilson Hutton</Text>
  <Title level={5}>Take your Easybank card wherever you go</Title>
  <Text type="secondary">We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …</Text>
    </Space>
  </Card>
      </Col>
      <Col xl={{span: 6}}>
      <Card
    hoverable
    style={{ width: 250 }}
    size={'small'}
    cover={<img alt="example" style={{height:'180px'}} src= {image4} />}
  > 
  <Space direction="vertical">
  <Text type="secondary">By Claire Robinson</Text>
  <Title level={5} >Our invite-only Beta accounts are now live!</Title>
  <Text type="secondary">After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...</Text>
    </Space>
  </Card>
      </Col>
      
    </Row>
  </div>
      </div>
    </Content>
    
  


</React.Fragment>
        );
        
        
    }
}

export default Content1
;