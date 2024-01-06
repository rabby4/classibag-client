import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import banner from '../../assets/contact-banner.webp'

const Contact = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${banner})`, padding: '80px 0px', textAlign: 'center' }}>
                <h2 className='display-5'>Contact</h2>
            </div>
            <Container className='my-5'>
                <Row className='justify-content-between'>
                    <Col lg={7} className='border border-1 border-dark-subtle p-5'>
                        <h2 className='fs-3 fw-normal text-center'>Do You Have Any Questions?</h2>
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
                    <Col lg={4} className='border-2 h-50'>content</Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;