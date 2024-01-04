// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import testimonialBgImg from '../../assets/testimonial.webp'
import user4 from '../../assets/user-4.webp'
import user3 from '../../assets/user-3.webp'
import user2 from '../../assets/user-2.webp'
import user1 from '../../assets/user-1.webp'
import { FaQuoteLeft } from "react-icons/fa";
import { Container } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <>
            <div className='mb-5' style={{ backgroundImage: `url(${testimonialBgImg})` }}>
                <Container style={{ maxWidth: '850px', }}>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper text-center "
                        style={{ padding: '100px 0px' }}
                    >
                        <SwiperSlide>
                            <FaQuoteLeft className='display-3 testIcon' />
                            <p className='secTextColor fs-5 my-3'>There are many variations of passages of lorem Ipsum available but the have alteration in some form by injected humour randomised words which dont look even believable lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <img src={user4} alt="" className='rounded-circle' />
                            <h2 className='fs-4 mt-1'>Stefanie Rashford</h2>
                            <h3 className='fs-5 secTextColor'>Founder</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FaQuoteLeft className='display-3 testIcon' />
                            <p className='secTextColor fs-5 my-3'>There are many variations of passages of lorem Ipsum available but the have alteration in some form by injected humour randomised words which dont look even believable lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <img src={user3} alt="" className='rounded-circle' />
                            <h2 className='fs-4 mt-1'>Augusta Wind</h2>
                            <h3 className='fs-5 secTextColor'>Web Designer</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FaQuoteLeft className='display-3 testIcon' />
                            <p className='secTextColor fs-5 my-3'>There are many variations of passages of lorem Ipsum available but the have alteration in some form by injected humour randomised words which dont look even believable lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <img src={user2} alt="" className='rounded-circle' />
                            <h2 className='fs-4 mt-1'>Luies Charls</h2>
                            <h3 className='fs-5 secTextColor'>CEO</h3>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FaQuoteLeft className='display-3 testIcon' />
                            <p className='secTextColor fs-5 my-3'>There are many variations of passages of lorem Ipsum available but the have alteration in some form by injected humour randomised words which dont look even believable lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <img src={user1} alt="" className='rounded-circle' />
                            <h2 className='fs-4 mt-1'>Reema ghurde</h2>
                            <h3 className='fs-5 secTextColor'>Manager</h3>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>

        </>
    );
};

export default Testimonial;