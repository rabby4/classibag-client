import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/Banner-1.webp'

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
                                <p className=''>Stating At Only <span>$99.00</span></p>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item interval={500}>
                    <ExampleCarouselImage text="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </>
    );
};

export default Banner;