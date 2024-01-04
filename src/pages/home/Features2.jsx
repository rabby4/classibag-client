import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../../components/shared/FeatureCard";
import cmsBanner1 from "../../assets/cms-banner-1.webp"
import cmsBanner2 from "../../assets/cms-banner-2.webp"

const Features2 = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <FeatureCard
                        bgImage={cmsBanner1}
                        subTitle={'Flat 10% Discount'}
                        title={'Women Barrel Bag Collection'}
                        price={'49.00'} />
                </Col>
                <Col>
                    <FeatureCard
                        bgImage={cmsBanner2}
                        subTitle={'Flat 10% Discount'}
                        title={'Women Barrel Bag Collection'}
                        price={'99.00'} />
                </Col>
            </Row>
        </Container>
    );
};

export default Features2;