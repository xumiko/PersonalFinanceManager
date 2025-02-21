import React from 'react';
import "./about.css";
import { Container, Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

export const About = () => {
  return (
//     <div className='card_container'>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the cards content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src="holder.js/100px180" />
// <Card.Body>
//   <Card.Title>Card Title</Card.Title>
//   <Card.Text>
//     Some quick example text to build on the card title and make up the
//     bulk of the cards content.
//   </Card.Text>
//   <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>

// <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the cards content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     </div>

<section className='about__section'>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about__section-content">
                            <h4 className="section__subtitle">About Us</h4>
                            <h2 className="section__title">Welcome to car rent service</h2>
                            <p className='section__desc'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Voluptatum blanditiis esse accusantium dignissimos labore
                                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                                neque sit ad temporibus quam similique dolor ipsam praesentium
                                sunt.
                            </p>
                            <div className="about__section-item d-flex align-items-center">

                                <p className='section__desc d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                                    amet.
                                </p>

                                <p className='section__desc d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                                    amet.
                                </p>
                            </div>

                            <div className="about__section-item d-flex align-items-center">
                                <p className='section__desc d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                                    amet.
                                </p>

                                <p className='section__desc d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                                    amet.
                                </p>
                            </div>
                        </div>
                    </Col>

                    {/* <Col lg="6" md="6">
                        <div className="about__img">
                            <img src={aboutImg} alt="" className="w-100" />
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
  )
}
