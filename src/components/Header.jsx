import React, { useState } from "react";
import { Button, Col, Row, Drawer } from "antd";
import { MenuOutlined } from '@ant-design/icons';
// import './Header.css'

export default function Header() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className="header-main">
            <Row align="middle">
                <Col lg={2} xs={2}>
                    <div>
                        <img src="logo-colour.svg" alt="Logo" width="100%" height="100%" />
                    </div>
                </Col>
                <Col lg={17} xs={17}></Col>
                <Col lg={5} xs={5}>
                    <div className="desktop-menu">
                        <Button>Home</Button>
                        <Button>About Us</Button>
                        <Button>Products</Button>
                    </div>
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
                        >
                            <Button block>Home</Button>
                            <Button block>About Us</Button>
                            <Button block>Products</Button>
                        </Drawer>
                    </div>
                </Col>
            </Row>

           
        </div>
    );
}
