import React from 'react';
import { Container } from 'react-bootstrap';
import { IoPricetagOutline } from "react-icons/io5";

const Coupon = () => {
    return (
        <>
            <Container>
                <div className='bgColorTransparent p-4 d-flex justify-content-center align-items-center my-5'>
                    <div className='me-5 d-flex align-items-center'>
                        <IoPricetagOutline className='display-6'></IoPricetagOutline>
                        <p className='mb-0 ms-3 fs-4'>Super discount for your first purchase</p>
                    </div>
                    <div>
                        <button className='bgColor border-0 rounded-0 px-4 py-2 btnHover'>Shop Now</button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Coupon;