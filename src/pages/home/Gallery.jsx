// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// import images
import image1 from '../../assets/image1.avif'
import image2 from '../../assets/image2.avif'
import image3 from '../../assets/image3.avif'
import image4 from '../../assets/image4.avif'
import image5 from '../../assets/image5.avif'
import image6 from '../../assets/image6.avif'
import image7 from '../../assets/image7.avif'


const Gallery = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                // pagination={{
                //     clickable: true,
                // }}
                Autoplay
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image7} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallery;