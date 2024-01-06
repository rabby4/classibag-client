import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import banner from '../../assets/contact-banner.webp'
import { FaPhoneAlt, FaHome, FaEnvelope, FaInfo } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${banner})`, padding: '80px 0px', textAlign: 'center' }}>
                <h2 className='display-5'>Contact</h2>
            </div>
            <Container className='my-5'>
                <Row className='justify-content-between'>
                    <Col lg={7} className='border border-1 border-dark-subtle p-5'>
                        <h2 className='fs-4 fw-normal text-center'>Do You Have Any Questions?</h2>
                        <Form className='mt-5'>
                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                    {/* controlId="formGridPassword"  on from group*/}
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name..." className='rounded-0' />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email..." className='rounded-0' />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Number..." className='rounded-0' />
                                </Form.Group>
                            </Row>
                            <Row className='my-3'>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="What's on your mind..."
                                    style={{ height: '100px', width: '96%', margin: 'auto' }}
                                    className='rounded-0'
                                />
                            </Row>

                            <Button type="submit" className='bgColor border-0 rounded-0 px-4 py-2 btnHover'>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={4} className='border border-1 border-dark-subtle p-5'>
                        <h2 className='fs-4 fw-normal text-center'>Get In Touch With Us</h2>
                        <div className='mt-5'>
                            <div className="d-flex">
                                <FaHome className="fs-4 me-2"></FaHome>
                                <div>
                                    <p className="mb-0 mediumFont fw-bold">Address:</p>
                                    <p className="mb-0 secTextColor mediumFont">33 New Montgomery St. </p>
                                    <p className="mb-0 secTextColor mediumFont">Ste 750 San Francisco,</p>
                                    <p className="mb-0 secTextColor mediumFont">CA, USA 94105</p>
                                </div>
                            </div>
                            <div className="d-flex my-4">
                                <FaPhoneAlt className="fs-4 me-2"></FaPhoneAlt>
                                <div>
                                    <p className="mb-0 mediumFont fw-bold">Contact No.:</p>
                                    <p className="mb-0 secTextColor mediumFont">(+91)7-723-4608</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <FaEnvelope className="fs-4 me-2"></FaEnvelope>
                                <div>
                                    <p className="mb-0 mediumFont fw-bold">Email:</p>
                                    <p className="mb-0 secTextColor mediumFont">classibag@exampledemo.com</p>
                                </div>
                            </div>
                            <div className="d-flex mt-4">
                                <FaInfo className="fs-4 me-2"></FaInfo>
                                <div>
                                    <p className="mb-0 mediumFont fw-bold">Store Info:</p>
                                    <p className="mb-0 secTextColor mediumFont">Monday – Friday 10 AM – 8 PM</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;