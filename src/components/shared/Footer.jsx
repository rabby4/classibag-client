import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope, FaHeadset, FaFacebookSquare, FaInstagram, FaYoutube, FaTwitter, FaArrowRight } from "react-icons/fa";
import paymentCard from "../../assets/payments.png"

const Footer = () => {
    return (
        <>
            <div className="py-5" style={{ background: "#f7f7f7" }}>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <h2 className="fs-4 mb-5">Our Information</h2>
                            <div className="d-flex">
                                <IoLocationOutline className="fs-2 textColor me-2"></IoLocationOutline>
                                <div>
                                    <p className="mb-0 secTextColor mediumFont">Classibag - Bag Store</p>
                                    <p className="mb-0 secTextColor mediumFont">507-Union Trade Ipsum Doler </p>
                                    <p className="mb-0 secTextColor mediumFont">ClCentre France</p>
                                </div>
                            </div>
                            <div className="d-flex my-4">
                                <FaRegEnvelope className="fs-4 textColor me-3"></FaRegEnvelope>
                                <p className="mb-0 secTextColor mediumFont">hello@blocks.com</p>
                            </div>
                            <div className="d-flex">
                                <FaHeadset className="fs-4 textColor me-3"></FaHeadset>
                                <p className="mb-0 secTextColor mediumFont">+81 520-150-001</p>
                            </div>
                            <div className="d-flex mt-4">
                                <Button variant='light' className='cardIcon'>
                                    <FaFacebookSquare />
                                </Button>
                                <Button variant='light' className='cardIcon mx-2'>
                                    <FaInstagram />
                                </Button>
                                <Button variant='light' className='cardIcon me-2'>
                                    <FaYoutube />
                                </Button>
                                <Button variant='light' className='cardIcon'>
                                    <FaTwitter />
                                </Button>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <h2 className="fs-4 mb-5">Quick Links</h2>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Search</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">About Us</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Contact Us</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Shipping</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Delivery Information</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Sitemap</a>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <h2 className="fs-4 mb-5">Services</h2>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Policy for Buyer</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Policy for Seller</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Shipping and Refund</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Size Chart</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink mb-2">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">Terms and Condition</a>
                            </div>
                            <div className="d-flex align-items-center secHoverText footerLink">
                                <FaArrowRight className="me-2"></FaArrowRight>
                                <a className="mb-0 mediumFont">FAQs</a>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <h2 className="fs-4 mb-5">Get Your Latest Update !</h2>
                            <p className="mb-0 secTextColor mediumFont">Subscribe to our latest newsletter to get news about special discounts.</p>
                            <InputGroup className="mt-4">
                                <Form.Control
                                    placeholder="Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className="subscribeInput"
                                />
                                <Button variant="outline-secondary" id="button-addon2" className="border-0 bgColor">
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bgColor">
                <Container className="d-flex justify-content-between align-items-center py-4 ">
                    <p className="mb-0 mediumFont">© 2024, Classibag - Bag Store </p>
                    <img src={paymentCard} alt="" />
                </Container>
            </div>
        </>
    );
};

export default Footer;