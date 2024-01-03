import React from 'react';
import { Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';

const Products = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-center display-6'>Trending Products</h2>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify

            >
                <Tab eventKey="featured" title="Featured" active>
                    <Row>
                        <Col xs={12} md={8} lg={3}>
                            <Card className='border-0'>
                                <Card.Img variant="top" src="https://classibag-codezeel.myshopify.com/cdn/shop/files/01.jpg?v=1699246974&width=713" />
                                <Card.Body>
                                    <Card.Text>Gucci</Card.Text>
                                    <Card.Title>Summer Nights Backpack Palm Trees</Card.Title>
                                    <Card.Text>Gucci</Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Tab>
                <Tab eventKey="new-arrivals" title="New Arrivals">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="best-seller" title="Best Seller">
                    Tab content for Loooonger Tab
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Products;