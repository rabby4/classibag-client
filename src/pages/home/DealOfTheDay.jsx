import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/shared/ProductCard";

const DealOfTheDay = () => {
    return (
        <Container>
            <h2 className='text-center display-6 my-5'>Trending Products</h2>
            <Row>
                <Col>
                    <ProductCard></ProductCard>
                </Col>
                <Col>
                    <ProductCard></ProductCard>
                </Col>
                <Col>
                    <ProductCard></ProductCard>
                </Col>
                <Col>
                    <ProductCard></ProductCard>
                </Col>
            </Row>
        </Container>
    );
};

export default DealOfTheDay;