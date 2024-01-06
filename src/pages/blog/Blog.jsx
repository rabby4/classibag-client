import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import banner from '../../assets/contact-banner.webp';
import blog6 from '../../assets/blog-6.webp'

const Blog = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${banner})`, padding: '80px 0px', textAlign: 'center' }}>
                <h2 className='display-5'>Blog</h2>

            </div>
            <Container className="mb-5">
                <h2 className='text-center display-6 my-5'>Trending Products</h2>
                <CardGroup style={{ gap: '25px' }}>
                    <Card className="border-0">
                        <Card.Img variant="top" src={blog6} />
                        <Card.Body className="px-0">
                            <Card.Text className="textColor mediumFont fw-medium">November 6, 2023</Card.Text>
                            <Card.Title>The Urban Dictionary of bag store</Card.Title>
                            <Card.Text className="secTextColor mediumFont">
                                Fashion is not merely about clothing; it is an embodiment of elegance, sophistication, and self-expression.
                            </Card.Text>
                            <Button variant="link" className="px-0 textColor fw-medium">Read More</Button>
                        </Card.Body>
                    </Card>
                    <Card className="border-0">
                        <Card.Img variant="top" src={blog6} />
                        <Card.Body className="px-0">
                            <Card.Text className="textColor mediumFont fw-medium">November 6, 2023</Card.Text>
                            <Card.Title>The Urban Dictionary of bag store</Card.Title>
                            <Card.Text className="secTextColor mediumFont">
                                Fashion is not merely about clothing; it is an embodiment of elegance, sophistication, and self-expression.
                            </Card.Text>
                            <Button variant="link" className="px-0 textColor fw-medium">Read More</Button>
                        </Card.Body>
                    </Card>
                    <Card className="border-0">
                        <Card.Img variant="top" src={blog6} />
                        <Card.Body className="px-0">
                            <Card.Text className="textColor mediumFont fw-medium">November 6, 2023</Card.Text>
                            <Card.Title>The Urban Dictionary of bag store</Card.Title>
                            <Card.Text className="secTextColor mediumFont">
                                Fashion is not merely about clothing; it is an embodiment of elegance, sophistication, and self-expression.
                            </Card.Text>
                            <Button variant="link" className="px-0 textColor fw-medium">Read More</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </>
    );
};

export default Blog;