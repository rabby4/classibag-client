import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

const Products = () => {
    return (
        <Container className='mb-5'>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="home" title="Home">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                    Tab content for Loooonger Tab
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Products;