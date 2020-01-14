import React, { useState, useEffect } from 'react';

// external dependencies
//
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// internal dependencies
//
import Button from 'components/button';

import history from 'utils/history';

const Homepage = (props) => {
  const { setContactModal } = props;

  // sets page title
  useEffect(() => {
    document.title = 'Cosden Solutions';
  });

  return (
    <>
      <div className="homepage">
        <div className="homepage__section-bg main-purple">
          <div className="homepage__section mobile-inverted">
            <div className="homepage__headline-text">
              <h1>Custom web solutions tailored to your needs.</h1>
              <hr className="separator" />
              <p>
                I build fully featured web applications using the latest
                technologies and frameworks available. I offer a great degree of
                customizeability, efficiency, and ease of use.
              </p>
              <Button
                text="Get In Touch"
                onClick={() => setContactModal(true)}
                secondary
              />
            </div>
            <div className="homepage__headline-image">
              <img src="/assets/img/homepage/homepage1.png" />
            </div>
          </div>
        </div>
        <div className="wave-container">
          <div className="wave" />
        </div>
      </div>

      <div className="homepage__section-bg white">
        <div className="homepage__section">
          <div className="homepage__what-i-do">
            <div className="homepage__section-headline">
              <h2>Services</h2>
              <h1>What I do</h1>
            </div>

            <div className="content-row">
              <div className="left">
                <img src="/assets/img/shared/development.png" />
              </div>

              <div className="right">
                <div className="number">#1</div>
                <h2>Web App Development</h2>
                <p>
                  I specialize in building web applications using the latest
                  frameworks that are fully customized to your business needs. I
                  build single page applications (SPAs) in React and use Python
                  to build out the back-end server running the application.
                </p>
                <Button
                  text="Learn More"
                  onClick={() => history.push('/development')}
                />
              </div>
            </div>

            <div className="content-row">
              <div className="left">
                <div className="number">#2</div>

                <h2>Online Coaching For React</h2>
                <p>
                  Do you need to learn React? I provide online coaching services
                  that will teach you React in about a month’s time. You will
                  fully learn React, be able to code proficiently with it, and
                  have a fully functional project built to show for it.
                </p>
                <Button
                  text="Learn More"
                  onClick={() => history.push('/coaching')}
                />
              </div>

              <div className="right">
                <img src="/assets/img/shared/coaching.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homepage__section-bg light-purple">
        <div className="homepage__section">
          <div className="homepage__choose-me">
            <div className="homepage__section-headline">
              <h2>Why Choose Me</h2>
              <h1>Fast, Efficient, and Reliable</h1>
            </div>
            <div className="reasons-wrapper">
              <div className="reason">
                <i className="fas fa-clock" />
                <h2>Always On Time</h2>
                <p>
                  I provide accurate timeframes and I am reliable when it comes
                  to getting things done on time, or sometimes early.
                </p>
              </div>
              <div className="reason">
                <i className="fas fa-check" />
                <h2>Hard Working</h2>
                <p>
                  I am hard working and very efficient. I love what I do and I
                  am dedicated to doing whatever is necessary to get the task
                  done.
                </p>
              </div>
              <div className="reason">
                <i className="fas fa-calendar-alt" />
                <h2>24/7 Available</h2>
                <p>
                  I am always available and within reach for any questions or
                  discussions. I firmly believe effective communication is the
                  key to a successful collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-container">
        <div className="wave light-purple" />
      </div>

      <div className="homepage__section-bg white">
        <div className="homepage__section">
          <div className="homepage__testimonials">
            {/*
            <div className="homepage__section-headline">
              <h2>What Do My Clients Say?</h2>
              <h1>Testimonials</h1>
            </div>

            <div className="testimonials-wrapper">
              <div className="testimonial">
                <i className="fas fa-quote-left" />
                <p>
                  Darius is very resourceful and thinks outside the box when it
                  comes to troubleshooting IT problems and things in general. He
                  is also very disciplined, diligent and professional in his
                  work. Anyone who hires him for projects can rest assured they
                  are in good hands as he is one of the most responsible
                  developers I've come across.
                </p>
                <h2>Samina de Sá Bashir</h2>
                <small>Bashir Persian Rugs</small>
              </div>
              <div className="testimonial">
                <i className="fas fa-quote-left" />
                <p>
                  Darius is very resourceful and thinks outside the box when it
                  comes to troubleshooting IT problems and things in general. He
                  is also very disciplined, diligent and professional in his
                  work. Anyone who hires him for projects can rest assured they
                  are in good hands as he is one of the most responsible
                  developers I've come across.
                </p>
                <h2>Samina de Sá Bashir</h2>
                <small>Bashir Persian Rugs</small>
              </div>
              <div className="testimonial">
                <i className="fas fa-quote-left" />
                <p>
                  Darius is very resourceful and thinks outside the box when it
                  comes to troubleshooting IT problems and things in general. He
                  is also very disciplined, diligent and professional in his
                  work. Anyone who hires him for projects can rest assured they
                  are in good hands as he is one of the most responsible
                  developers I've come across.
                </p>
                <h2>Samina de Sá Bashir</h2>
                <small>Bashir Persian Rugs</small>
              </div>
            </div>
*/}

            <div className="projects-wrapper">
              <div className="homepage__section-headline">
                <h2>A Few Companies I've Worked With</h2>
                <h1>Projects</h1>
              </div>

              <Carousel
                responsive={{
                  mobile: {
                    breakpoint: { max: 991, min: 0 },
                    items: 1,
                    slidesToSlide: 1,
                  },
                  desktop: {
                    breakpoint: { max: 3400, min: 992 },
                    items: 3,
                    slidesToSlide: 1,
                  },
                }}
                arrows={false}
                draggable={true}
                swipeable={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
              >
                <img src="/assets/img/homepage/st-art.png" />
                <img src="/assets/img/homepage/kiid.png" />
                <img src="/assets/img/homepage/tob.png" />
                <img src="/assets/img/homepage/protos.png" />
                <img src="/assets/img/homepage/letsconvert.png" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="homepage__section-bg main-purple">
        <div className="homepage__section ">
          <div className="homepage__schedule-call">
            <h1>Schedule a free consultation call</h1>
            <Button
              secondary
              text="Get In Touch"
              onClick={() => setContactModal(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
