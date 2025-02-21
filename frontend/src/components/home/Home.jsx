import React from 'react';
import "./home.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../../images/image1.png';
import aboutImage from '../../images/photo2.png';
import person1 from '../../images/person1.jpg';
import person2 from '../../images/person2.jpg';
import person3 from '../../images/person3.jpg';
import contactImage from '../../images/logo1.png';
import {Link} from 'react-router-dom';

import Card from 'react-bootstrap/Card';


export const Home = () => {
  return (
    <div>

{/* <div className="home_container py-2">
      <div className="row justify-content-center">
        <div className="col-lg-8 mx-auto text-center">
          <div className="p-5 bg-primary text-white rounded-3">
            <h1 className="display-4">Welcome to My Website</h1>
            <p className="lead">
              This is a simple hero unit, a jumbotron-style component for calling extra attention to featured content or information.
            </p>
            <hr className="my-4"/>
            <a className="btn btn-light btn-lg" href="#" role="button">Learn More</a>
          </div>
        </div>
      </div>
    </div> */}

<div className="home">
<section className="hero">
  <Container>
    <Row className="align-items-center">
      <Col lg="6" md="6">
        <div className="hero-content">
          <h1 className="hero-title">Smart Tracking for Smarter Spending</h1>
          <p className="hero-desc">
            Keep Your Finances Balanced!
          </p>
          <Button variant="primary" href="/login">Get Started</Button>
        </div>
      </Col>
      <Col lg="6" md="6">
        <div className="hero-img">
          <img src={heroImage} alt="Home Image" className="w-100" />
        </div>
      </Col>
    </Row>
  </Container>
</section>


{/* "How to Use" Section */}
<section className="how-to-use" id="how-to-use">
        <Container>
          <Row>
            <Col lg="12">
              <div className="how-to-use-content">
                <h2 className="section-title">How to Use</h2>
                <p className="section-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, eligendi? Lorem ipsum dolor sit amet.
                </p>
                <Button variant="secondary" href="/notFound">Learn more</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-us">
  <Container className='about'>
    <Row className="align-items-center">
    <Col lg="6" md="6">
        <div className="about-img">
          <img src={aboutImage} alt="" className="w-100" />
        </div>
      </Col>
      <Col lg="6" md="6">
        <div className="about-content">
          <h2 className="hero-title">Are You Ready to Level Up Financially?</h2>
         
          <p className="about-desc">
             <p>save hours of work every month with an expense automation process. so easy to use that everyone will actually use it</p>
           
          </p>
          <Button variant="primary" href="/about">learn about us</Button>
        </div>
      </Col>
    </Row>
  </Container>
</section>


{/* ------------------------------------------------------------------------------------------------------------------- */}
<section className="testimonials">
      <Container>
        <Row>
          <Col lg="12">
            <div className="user-content">
              <h4>Customer</h4>
              <h2 className="section-title">Testimonials</h2>
              <p className="section-desc">
                <h5>What they are saying</h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, eligendi? Lorem ipsum dolor sit amet.
              </p>

              {/* Testimonials Cards */}
              <Row>
                <Col sm={12} md={4}>
                  <Card className="card-shadow" style={{ width: '20.5rem' }}>
                  
                    <Card.Img variant="top" src={person1} />
                    <Card.Body>
                      <Card.Title>Arman Patel</Card.Title>
                      <Card.Text>
                        "This product is amazing! It changed my life for the better. Highly recommend it!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm={12} md={4}>
                  <Card className="card-shadow" style={{ width: '21rem' }}>
                    <Card.Img variant="top" src={person2} />
                    <Card.Body>
                      <Card.Title>Jane Smith</Card.Title>
                      <Card.Text>
                        "Fantastic service! I am so happy with the results, and the customer support is great!"
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm={12} md={4}>
                  <Card className="card-shadow" style={{ width: '21.5rem' }}>
                    <Card.Img variant="top" src={person3} />
                    <Card.Body>
                      <Card.Title>Devabrata Singh</Card.Title>
                      <Card.Text>
                        "Highly professional and efficient. Will definitely use their services again."
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      </Container>
    </section>

{/* ------------------------------------------------------------------------------------------------------------------ */}

<section className="contact">
<Container>
        <Row>
        <Col lg="" md="">
        <div className="contact-img">
          <img src={contactImage} alt="" className="" />
        </div>
        <Col >
        <div className="contact">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-sec">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor iste exercitationem tempora provident soluta itaque quod, ipsa quo assumenda non.
                </p>
                
              </div>
              </Col>
      </Col>

       
<Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Quick Links</h5>
              <p><a className="contact-link" href="/about">About</a></p>
              <p><a className="contact-link" href="/notFound">Fleet</a></p>
              <p><a className="contact-link" href="/notFound">FAQs</a></p>
              <p><a className="contact-link" href="/notFound">Contact Us</a></p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Saltlake, Kolkata, India</p>
              <p className="office__info">Phone: +0995345875365</p>
              <p className="office__info">Email: eg@gmail.com</p>
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Get In Touch</h5>
              <p className="">Send us emails</p>
              <p type="email">Email: budgetbuddy123@gmail.com </p>
              {/* <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div> */}
            </div>
          </Col>

        </Row>
      </Container>
</section>

      <footer className="footer">
  <div className="container">
    <p>Copyright &copy; <span id="year"></span><a href='https://github.com/xumiko'>xumiko.github.com</a></p>
  </div>
</footer>


</div>
    </div>
  )
}
