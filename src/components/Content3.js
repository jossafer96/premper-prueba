import React, {Component} from 'react';
import {  Col } from 'antd';
import { Button, Space } from 'antd';
import { Typography } from 'antd';
const { Text } = Typography;
const { Title } = Typography;



class Content3 extends Component{
    render(){
        return(
            <React.Fragment>
<Col xl={{ span: 9 }}>
          <div className="site-layout-background" style={{  minHeight: 400, marginTop: '40%' }}>
          <Space direction="vertical">
          <Title>Next generation digital banking</Title>
          <Text type="secondary">Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</Text>
          <Button
                      className="third"
                      type=""
                      shape="round"
                      size="large"
                      style={{marginTop:'20px'}}
                    >
                      Request Invite
                    </Button>
                    </Space>
          </div>
          </Col>
          <Col xl={{ span: 12 }}>
           <svg style={{position:'absolute',top:-250, width:'100%'}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={1271} height={1034}><defs><linearGradient id="c" x1="0%" x2="99.58%" y1="36.147%" y2="63.736%"><stop offset="0%" stopColor="#33D35E" /><stop offset="100%" stopColor="#2AB6D9" /></linearGradient><filter id="a" width="104.9%" height="135.9%" x="-4.8%" y="-17.6%" filterUnits="objectBoundingBox"><feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="38.5" /><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0240111451 0" /></filter><path id="b" d="M69.445 572.84L203.73 707.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00647.584 956h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812 0-8.172-3.246-16.01-9.025-21.788L855.85 430.11a100 100 0 00-70.708-29.287H550.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00374.032 307H138.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z" /></defs><g fill="none" fillRule="evenodd" transform="translate(15)"><use fill="#000" filter="url(#a)" xlinkHref="#b" /><use fill="#2D314D" xlinkHref="#b" /><path fill="url(#c)" d="M207.445 265.84L341.73 400.112a100 100 0 0070.708 29.286h70.693a100 100 0 0170.708 29.287l161.04 161.027A100 100 0 00785.584 649h388.853c44.964 0 81.415-36.45 81.415-81.414a81.414 81.414 0 00-23.848-57.57l-86.392-86.386c-12.033-12.032-12.034-31.54-.002-43.574a30.812 30.812 0 0121.788-9.025c17.017 0 30.812-13.795 30.812-30.812 0-8.172-3.246-16.01-9.025-21.788L993.85 123.11a100 100 0 00-70.708-29.287H688.7a100 100 0 01-70.708-29.287l-35.253-35.25A100 100 0 00512.032 0H276.88c-31.769 0-57.523 25.754-57.523 57.523a57.523 57.523 0 0016.85 40.676l28.761 28.76c15.886 15.884 15.887 41.64.003 57.525a40.676 40.676 0 01-28.764 11.915c-22.465 0-40.677 18.211-40.677 40.676a40.676 40.676 0 0011.915 28.764z" /></g></svg>

          </Col>
</React.Fragment>
        );
        
        
    }
}

export default Content3
;