import React from "react";
import { Layout, Row, Col } from "antd";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import logo1 from "../../img/logo.jfif";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header className="header">
      <Row align="middle">
        <Col span={4}>
          <div className="logo">
            <a href="/">
              <img src={logo1} className="h-12 mx-auto" />
            </a>
          </div>
        </Col>
        <Col span={17}>
          <Navigation />
        </Col>
        <Col span={3}>
          <UserMenu />
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
