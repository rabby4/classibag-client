import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import CategoryImg1 from "./../../assets/cat-1.avif"
import CategoryImg2 from "./../../assets/cat-2.avif"
import CategoryImg3 from "./../../assets/cat-3.avif"
import CategoryImg4 from "./../../assets/cat-4.avif"
import CategoryImg5 from "./../../assets/cat-5.avif"

const Category = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-center display-6 mb-5'>Shop By Category</h2>
            <Row>
                <Col>
                    <Card className='border-0'>
                        <Image variant="top" src={CategoryImg1} roundedCircle />
                        <Card.Body className='text-center'>
                            <Card.Title className='fs-4 mb-0'>Kelly Handbag</Card.Title>
                            <Button className='bg-transparent border-0 textColor fs-5'>View All</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Image variant="top" src={CategoryImg2} roundedCircle />
                        <Card.Body className='text-center'>
                            <Card.Title className='fs-4 mb-0'>Bucket Bag</Card.Title>
                            <Button className='bg-transparent border-0 textColor fs-5'>View All</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Image variant="top" src={CategoryImg3} roundedCircle />
                        <Card.Body className='text-center'>
                            <Card.Title className='fs-4 mb-0'>Pocket Bag</Card.Title>
                            <Button className='bg-transparent border-0 textColor fs-5'>View All</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Image variant="top" src={CategoryImg4} roundedCircle />
                        <Card.Body className='text-center'>
                            <Card.Title className='fs-4 mb-0'>Backpack</Card.Title>
                            <Button className='bg-transparent border-0 textColor fs-5'>View All</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Image variant="top" src={CategoryImg5} roundedCircle />
                        <Card.Body className='text-center'>
                            <Card.Title className='fs-4 mb-0'>Shoulder Bag</Card.Title>
                            <Button className='bg-transparent border-0 textColor fs-5'>View All</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;