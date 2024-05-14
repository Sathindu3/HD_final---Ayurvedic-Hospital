import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Overview_description.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../Resources/images/image1.jpg';
import Image2 from '../../Resources/images/image2.jpg';
import Image3 from '../../Resources/images/image3.jpg';
import Image4 from '../../Resources/images/image4.jpg';
import Image5 from '../../Resources/images/image5.jpg';
import Image6 from '../../Resources/images/image6.jpg';


const Overview = () => {
  return (
    <div>
      <div className="container-fluid section-1">
        <div className="group1">
          <div className="row">
            <div className="content-1">
              <h3>Embark on a Journey of Ayurvedic Healing</h3>
              <h2>Welcome to <span>Ayurvedhaa Hospital</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="container-fluid content-2">
              <div className="col-lg-5 sub-1">
                <img src={Image2} alt="" />
              </div>
              <div className="col-lg-7 sub-2">
                <div className="para">
                  <p>Welcome to our sanctuary of Ayurvedic wellness, where ancient wisdom meets modern healing. At [Hospital Name], we believe in the transformative power of Ayurveda,a holistic approach to health that harmonizes mind, body, and spirit. Nestled in serene surroundings,our hospital offers a haven for those seeking natural remedies and rejuvenation. With a dedicated team of experienced doctors and therapists, state-of-the-art facilities, and a commitment to personalized care, we aim to guide you on your journey to vibrant health and inner balance. Whether you seek relief from ailments, rejuvenation, or simply a retreat from the stresses of daily life, we invite you to embark on this transformative path with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid content-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Carousel className='slide'>
                  <Carousel.Item>
                    <img className='image-fluid ' src={Image1} alt="First slide" />
                    <Carousel.Caption>
                      <h3>First Slide Caption</h3>
                      <p>Some description for the first slide.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Image2} alt="First slide" />
                    <Carousel.Caption>
                      <h3>First Slide Caption</h3>
                      <p>Some description for the first slide.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>

                    <img src={Image3} alt="First slide" />
                    <Carousel.Caption>
                      <h3>First Slide Caption</h3>
                      <p>Some description for the first slide.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="container section-1 content-4 ">
          <div className="row">

            <div className="col-lg-4">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Our Staff</Card.Title>
                  <Card.Text>
                    <img src={Image4} alt="" />
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    <img src={Image5} alt="" />
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    <img src={Image6} alt="" />
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="container section-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.9248121582605!2d80.35623413872787!3d7.481852057507571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a22f7ef7d7d%3A0x1ea33b80e7201808!2sNational%20Institute%20of%20Business%20Management%20(NIBM)%20Kurunegala%20Centre!5e0!3m2!1sen!2slk!4v1715625827130!5m2!1sen!2slk" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      
      </div>

    </div>
  )
}

export default Overview
