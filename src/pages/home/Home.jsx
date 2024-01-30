import Banner from "./Banner";
import Blog from "./Blog";
import Category from "./Category";
import CollectionBanner from "./CollectionBanner";
import Coupon from "./Coupon";
import DealOfTheDay from "./DealOfTheDay";
import Features from "./Features";
import Features2 from "./Features2";
import Gallery from "./Gallery";
import ImageWithText from "./ImageWithText";
import MarqueeText from "./MarqueeText";
import Products from "./Products";
import Service from "./Service";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Features></Features>
            <Category></Category>
            <Coupon></Coupon>
            <Products></Products>
            <Service></Service>
            <CollectionBanner></CollectionBanner>
            {/* <MarqueeText></MarqueeText> */}
            <Features2></Features2>
            <DealOfTheDay></DealOfTheDay>
            <Testimonial></Testimonial>
            <ImageWithText></ImageWithText>
            <Blog></Blog>
            <Gallery></Gallery>
        </>
    );
};

export default Home;