import React, { useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Modal, Row, Tab, Tabs } from 'react-bootstrap';
import { Rating, Star, ThinStar, RoundedStar, ThinRoundedStar, StickerStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaCodeCompare } from "react-icons/fa6";

const includedShapesStyles = [ThinStar].map(
    (itemShapes) => ({ itemShapes, activeFillColor: '#F2B600', inactiveFillColor: '#CCCCCC' })
);

const Products = () => {
    const [rating, setRating] = useState(3);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Card className='border-0 visibleCardIcon'>

                                <div className='d-flex flex-column position-absolute end-0 mt-3 hiddenCardIcon'>
                                    <Button variant='light' className='cardIcon'>
                                        <FaRegHeart />
                                    </Button>
                                    <Button variant='light' className='my-2 cardIcon'>
                                        <FaCodeCompare />
                                    </Button>
                                    <Button onClick={handleShow} variant='light' className='cardIcon'>
                                        <FaRegEye />
                                    </Button>
                                    <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Using Grid in Modal
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="grid-example">
                                            <Container>
                                                <Row>
                                                    <Col xs={12} md={8}>
                                                        .col-xs-12 .col-md-8
                                                    </Col>
                                                    <Col xs={6} md={4}>
                                                        .col-xs-6 .col-md-4
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col xs={6} md={4}>
                                                        .col-xs-6 .col-md-4
                                                    </Col>
                                                    <Col xs={6} md={4}>
                                                        .col-xs-6 .col-md-4
                                                    </Col>
                                                    <Col xs={6} md={4}>
                                                        .col-xs-6 .col-md-4
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>



                                <Card.Img variant="top" src="https://classibag-codezeel.myshopify.com/cdn/shop/files/01.jpg?v=1699246974&width=713" />
                                <Card.Body className='ps-0 pe-0'>
                                    <Card.Text className='mb-0'>Gucci</Card.Text>
                                    <Card.Title className='fs-5 fw-normal'>Summer Nights Backpack Palm Trees</Card.Title>
                                    <div className='w-50'>
                                        {includedShapesStyles.map((itemStyles, index) => (
                                            <Rating
                                                key={`shape_${index}`}
                                                value={rating}
                                                onChange={setRating}
                                                itemStyles={itemStyles}
                                                readOnly
                                            />
                                        ))}
                                    </div>
                                    <Card.Text className='fs-5 fw-normal mt-2'> <span className='text-decoration-line-through'>$55.00</span> <span className=' textColor'>$49.00</span></Card.Text>
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