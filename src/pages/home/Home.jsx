import Banner from "./Banner";
import CollectionBanner from "./CollectionBanner";
import Coupon from "./Coupon";
import Features from "./Features";
import Products from "./Products";
import Service from "./Service";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Features></Features>
            <Coupon></Coupon>
            <Products></Products>
            <Service></Service>
            <CollectionBanner></CollectionBanner>
        </>
    );
};

export default Home;