import { Card, Col, Container, Row } from "react-bootstrap";
import parallaxImg from '../../assets/parallax-img-1.webp'

const CollectionBanner = () => {
    return (
        <>
            <Card className="text-dark border-0 rounded-0 overflow-hidden" style={{ height: '750px' }}>
                <Card.Img src={parallaxImg} alt="Card image" />
                <Card.ImgOverlay>
                    <Container className="h-100">
                        <Row className="d-flex h-100 align-items-center">
                            <Col></Col>
                            <Col>
                                <Card.Text className='mb-0 fs-4'>New Bages Collection</Card.Text>
                                <Card.Title className='display-2 fw-normal'>Weekender Travel Backpack</Card.Title>
                                <Card.Text> <span className="fs-4">Stating At Only</span> <span className='fs-3 textColor fw-medium'>$149.00</span></Card.Text>
                                <button className='bgColor fs-5 border-0 rounded-0 px-5 py-2 btnHover'>Shop Now</button>
                            </Col>
                        </Row>

                    </Container>
                </Card.ImgOverlay>
            </Card>
        </>
    );
};

export default CollectionBanner;