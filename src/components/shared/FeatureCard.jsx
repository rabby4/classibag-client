import { Card, Col, Row } from "react-bootstrap";

const FeatureCard = ({ bgImage, subTitle, title, price }) => {
    return (
        <>
            <Card className="bg-dark text-black border-0">
                <Card.Img src={bgImage} alt="Card image" className='rounded-0' />
                <Card.ImgOverlay className='p-5'>
                    <Row>
                        <Col>
                            <Card.Text className='mb-0'>{subTitle}</Card.Text>
                            <Card.Title className='fs-1 fw-light'>{title}</Card.Title>
                            <Card.Text>Stating At Only <span className='fs-4 textColor fw-medium'>${price}</span></Card.Text>
                            <button className='bgColor border-0 rounded-0 px-4 py-2 btnHover'>Shop Now</button>
                        </Col>
                        <Col lg='2'></Col>
                    </Row>
                </Card.ImgOverlay>
            </Card>
        </>
    );
};

export default FeatureCard;