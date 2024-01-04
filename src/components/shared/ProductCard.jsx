import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { Rating, ThinStar } from '@smastrom/react-rating';
import { useState } from "react";

const includedShapesStyles = [ThinStar].map(
    (itemShapes) => ({ itemShapes, activeFillColor: '#F2B600', inactiveFillColor: '#CCCCCC' })
);
const ProductCard = () => {
    const [rating, setRating] = useState(3);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
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

                {/* product image */}
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
        </div>
    );
};

export default ProductCard;