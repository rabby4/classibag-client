import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import subBanner1 from '../../assets/sub-banner-1.webp'
import subBanner2 from '../../assets/sub-banner-2.webp'
import subBanner3 from '../../assets/sub-banner-3.webp'
import FeatureCard from '../../components/shared/FeatureCard';

const Features = () => {
    return (
        <>
            <div className='w-100 py-4 px-2'>
                <Row className='w-100 mx-auto'>
                    <Col>
                        <FeatureCard
                            bgImage={subBanner1}
                            subTitle={'Flat 15% Discount'}
                            title={'Designer Jet Set Handbag'}
                            price={'30.00'} />
                    </Col>
                    <Col>
                        <FeatureCard
                            bgImage={subBanner2}
                            subTitle={'Flat 20% Discount'}
                            title={'Aristocrat Unisex Backpack'}
                            price={'25.00'} />
                    </Col>
                    <Col>
                        <FeatureCard
                            bgImage={subBanner3}
                            subTitle={'Flat 30% Discount'}
                            title={'Selling Handbag For Her'}
                            price={'49.00'} />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Features;