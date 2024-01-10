import { Card, Container } from 'react-bootstrap';
import banner from '../../assets/contact-banner.webp'

const About = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${banner})`, padding: '80px 0px', textAlign: 'center' }}>
                <h2 className='display-5'>About</h2>
            </div>
            <Container className='my-5'>
                <Card className='border-0'>
                    <Card.Body>
                        <Card.Title className='fs-2 fw-normal'>Our company</Card.Title>
                        <Card.Text className='secTextColor mediumFont'>
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Body>
                        <Card.Title className='fs-2 fw-normal'>Our team</Card.Title>
                        <Card.Text className='secTextColor mediumFont'>
                            Lorem set sint occaecat cupidatat non,Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Body>
                        <Card.Title className='fs-2 fw-normal'>Testimonials</Card.Title>
                        <Card.Text className='secTextColor mediumFont'>
                            “Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.”
                            <br />
                            “Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.”
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>
        </>
    );
};

export default About;