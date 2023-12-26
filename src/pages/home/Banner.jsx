import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/Banner-1.webp'
import banner2 from '../../assets/Banner-2.webp'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src={banner1} width={"100%"} />
                    <div className='w-100'>
                        <Carousel.Caption className='container mx-auto h-100 d-flex align-items-center text-start '>
                            <div className='text-black'>
                                <p className='fs-5'>New Bages Collection</p>
                                <h1 className='display-2 fw-medium'>Holiday Deals On <br /> Traveling Bag</h1>
                                <p className='fs-5'>Stating At Only <span className='fs-3 textColor fw-medium'>$99.00</span></p>
                                <button className='bgColor border-0 rounded-0 px-4 py-2 btnHover'>Shop Now</button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={banner2} width={"100%"} />
                    <div className='w-100'>
                        <Carousel.Caption className='container mx-auto h-100 d-flex align-items-center text-start '>
                            <div className='text-black'>
                                <p className='fs-5'>New Bages Collection</p>
                                <h1 className='display-2 fw-medium'>Holiday Deals On <br /> Traveling Bag</h1>
                                <p className='fs-5'>Stating At Only <span className='fs-3 textColor fw-medium'>$99.00</span></p>
                                <button className='bgColor border-0 rounded-0 px-4 py-2 btnHover'>Shop Now</button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

            </Carousel>
        </>
    );
};

export default Banner;