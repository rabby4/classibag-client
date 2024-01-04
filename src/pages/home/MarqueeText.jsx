import Marquee from "react-fast-marquee";

const MarqueeText = () => {
    return (
        <>
            <Marquee className="d-flex justify-content-between">
                <p>I can be a React component, multiple React components, or just some text.</p>
                <p>I can be a React component, multiple React components, or just some text.</p>
                <p>I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </>
    );
};

export default MarqueeText;
