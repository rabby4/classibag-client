import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import subBanner1 from '../../assets/sub-banner-1.webp'
import subBanner2 from '../../assets/sub-banner-2.webp'
import subBanner3 from '../../assets/sub-banner-3.webp'

const Features = () => {
    return (
        <>
            {/* <Container> */}
            <div className='w-100 p-5'>
                <Row className='w-100 mx-auto'>
                    <Col>
                        <Card className="bg-dark text-black border-0">
                            <Card.Img src={subBanner1} alt="Card image" className='rounded-0' />
                            <Card.ImgOverlay className='p-5'>
                                <Card.Text className='mb-0'>Flat 15% Discount</Card.Text>
                                <Card.Title className='fs-1 fw-light'>Designer Jet Set <br /> Handbag</Card.Title>
                                <Card.Text>Stating At Only <span className='fs-4 textColor fw-medium'>$30.00</span></Card.Text>
                                <button className='bgColor border-0 rounded-0 px-4 py-2 btnHover'>Shop Now</button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-black border-0">
                            <Card.Img src={subBanner2} alt="Card image" className='rounded-0' />
                            <Card.ImgOverlay className='p-5'>
                                <Card.Text className='mb-0'>Flat 20% Discount</Card.Text>
                                <Card.Title className='fs-1 fw-light'>Aristocrat Unisex <br /> Backpack</Card.Title>
                                <Card.Text>Stating At Only <span className='fs-4 textColor fw-medium'>$25.00</span></Card.Text>
                                <button className='bgColor border-0 rounded-0 px-4 py-2 btnHover'>Shop Now</button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-black border-0">
                            <Card.Img src={subBanner3} alt="Card image" className='rounded-0' />
                            <Card.ImgOverlay className='p-5'>
                                <Card.Text className='mb-0'>Flat 30% Discount</Card.Text>
                                <Card.Title className='fs-1 fw-light'>Selling Handbag <br /> For Her</Card.Title>
                                <Card.Text>Stating At Only <span className='fs-4 textColor fw-medium'>$49.00</span></Card.Text>
                                <button className='bgColor border-0 rounded-0 px-4 py-2 btnHover'>Shop Now</button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </div>
            {/* </Container> */}
        </>
    );
};

export default Features;