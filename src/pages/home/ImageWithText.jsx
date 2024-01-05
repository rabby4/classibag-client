import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner3 from '../../assets/cms-banner-3.webp'

const ImageWithText = () => {
    return (
        <div>
            <Container className="mb-5">
                <Row className="d-flex h-100 align-items-center">
                    <Col>
                        <img src={banner3} alt="" />
                    </Col>
                    <Col>
                        <p className='mb-0 fs-4 textColor'>100% Original Products</p>
                        <h2 className='fs-1 fw-normal my-3'>Style In Handcrafts, Bag Made By Classibag For You</h2>
                        <p className='secTextColor' style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit crasvelmi quam fusce vehicula vitae mauris a amet tempor donec consectetur lorem ipsum dolor sit  amet adipiscing elit done.</p>
                        <p className='secTextColor' style={{ fontSize: '18px' }}>At vero eos et accusamus iusto odio dignissimos ducimus qui bland praesen tium voluptatum deleniti atque corrupti</p>
                        <button className='bgColor fs-5 border-0 rounded-0 px-5 py-2 mt-3 btnHover'>Shop Now</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ImageWithText;