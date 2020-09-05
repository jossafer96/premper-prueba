import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import "./assets/css/Header.css";
import "./assets/css/Footer.css";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { Button } from 'antd';

// COMPONENTES
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";

const { Text, Title } = Typography;

function App() {
  return (
    <div>
      <Header />
      <section className="App-header">
        <Row justify="end" style={{ backgroundColor: "white" }} >
        <Content3 />
        </Row>
        <Row justify="center">
          <Col xl={{ span: 18 }}>
            <Content2 />
          </Col>
        </Row>
        <Row justify="center" style={{ backgroundColor: "white" }}>
          <Col xl={{ span: 18 }}>
            <Content />
          </Col>
        </Row>
      </section>
      <Footer />
    </div>
  );
}

export default App;
