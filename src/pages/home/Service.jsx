import { Button, Card, Col, Container, Row } from "react-bootstrap";
import service1 from '../../assets/service-1.png'

const Service = () => {
    return (
        <Container className="mb-5">
            <Row>
                <Col>
                    <Card className="allServiceCard firstService border-0">
                        <Row>
                            <Col xs={3}></Col>
                            <Col xs={9} className="px-0">
                                <Card.Body>
                                    <Card.Title>Free Shipping</Card.Title>
                                    <Card.Text>Orders from all item</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className="allServiceCard secService border-0">
                        <Row>
                            <Col xs={3}></Col>
                            <Col xs={9} className="px-0">
                                <Card.Body>
                                    <Card.Title>Flexible Payment</Card.Title>
                                    <Card.Text>Pay with multiple cards.</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className="allServiceCard thirdService border-0">
                        <Row>
                            <Col xs={3}></Col>
                            <Col xs={9} className="px-0">
                                <Card.Body>
                                    <Card.Title>Easy Return Policy</Card.Title>
                                    <Card.Text>If goods have problems.</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className="allServiceCard fourthService border-0">
                        <Row>
                            <Col xs={3}></Col>
                            <Col xs={9} className="px-0">
                                <Card.Body>
                                    <Card.Title>Customer Service</Card.Title>
                                    <Card.Text>We support online all days.</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Service;