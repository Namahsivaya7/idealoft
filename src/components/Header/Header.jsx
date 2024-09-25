import React, { useState } from "react";
import { Button, Col, Row, Drawer, Typography, Flex } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import './Header.css'

export default function Header() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className="header-main" style={{width:"100%"}}>
            <Row justify="space-between">
                <Col xs={1}></Col>
                <Col lg={4} xs={9}>
                    <div className="header-left" style={{gap:10,alignItems:"center",display:"flex"}}>
                        <img src="logo-colour.svg" alt="Logo" width="40px" height="40px" />
                        <Flex dir="row"><Typography style={{color:"white"}}>EquiTek</Typography></Flex>
                    </div>
                </Col>
                <Col lg={14}></Col>
                <Col lg={5} xs={0}>
                    <div className="desktop-menu">
                        <Button>Home</Button>
                        <Button>About Us</Button>
                        <Button>Products</Button>
                    </div>
                </Col>
                <Col xs={10}></Col>
                <Col lg={0} xs={2}>
                    <div className="mobile-menu">
                        <Button
                            icon={<MenuOutlined />}
                            onClick={showDrawer}
                            className="menu-icon"
                        />
                        <Drawer
                            title="Menu"
                            placement="right"
                            onClose={onClose}
                            open={visible}
                            className="header-drawer"
                        >
                            <Button block>Home</Button>
                            <Button block>About Us</Button>
                            <Button block>Products</Button>
                        </Drawer>
                    </div>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </div>
    );
}
