import { FaRegEnvelope } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const TopBar = () => {
    return (
        <>
            <div className=" bgColor">
                <div className="container mx-auto py-2 d-flex justify-content-between">
                    <div>
                        <p className="mb-0">Summer Season Sale Up To 25% OFF - Shop Now</p>
                    </div>
                    <div className="d-flex">
                        <p className="me-5 mb-0 d-flex align-items-center"><FaRegEnvelope></FaRegEnvelope><span className="ms-2">Support</span></p>
                        <p className="mb-0 d-flex align-items-center"> <BiSupport></BiSupport> <span className="ms-2">Store Location</span> </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;