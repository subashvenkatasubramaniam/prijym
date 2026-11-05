import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function Contact() {
  return (
    <Layout title="Contact Us || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Contact Us" />

          {/* contact-info-section */}
          <section className="contact-info-section pt_120 pb_90 centred">
              <div className="auto-container">
                  <div className="sec-title mb_70 sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Contact Info</span>
                      <h2 className="title-animation">Our Contact Details</h2>
                  </div>
                  <div className="row clearfix">
                      <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                          <div className="info-block-one">
                              <div className="inner-box">
                                  <div className="icon-box">
                                      <div className="r-hex">
                                          <div className="r-hex-inner"></div>
                                      </div>
                                      <div className="icon"><i className="icon-67"></i></div>
                                  </div>
                                  <h3>Our Location</h3>
                                  <p>1901 Thornridge Cir. Shiloh, <br />Hawaii 81063</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                          <div className="info-block-one">
                              <div className="inner-box">
                                  <div className="icon-box">
                                      <div className="r-hex">
                                          <div className="r-hex-inner"></div>
                                      </div>
                                      <div className="icon"><i className="icon-68"></i></div>
                                  </div>
                                  <h3>Email Address</h3>
                                  <p><a href="mailto:contact@example.com">contact@example.com</a><br /><a href="mailto:support@example.com">support@example.com</a></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                          <div className="info-block-one">
                              <div className="inner-box">
                                  <div className="icon-box">
                                      <div className="r-hex">
                                          <div className="r-hex-inner"></div>
                                      </div>
                                      <div className="icon"><i className="icon-69"></i></div>
                                  </div>
                                  <h3>Phone Number</h3>
                                  <p>Emergency Cases<br /> <a href="tel:2085550112">+(208) 555-0112</a> (24/7)</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* contact-info-section end */}

          {/* google-map-section */}
          <section className="google-map-section">
              <div className="auto-container">
                  <div className="map-inner">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd" width="600" height="535" frameBorder="0" style={{ border: "0", width: "100%" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                  </div>
              </div>
          </section>
          {/* google-map-section end */}

          {/* contact-section */}
          <section className="contact-section pt_120 pb_180">
              <div className="auto-container">
                  <div className="sec-title centred mb_70 sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Send Message</span>
                      <h2 className="title-animation">Get in Touch</h2>
                  </div>
                  <div className="form-inner">
                      <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
                          <div className="row clearfix">
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input type="text" name="username" placeholder="Your name" required />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input type="email" name="email" placeholder="Your email" required />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input type="text" name="phone" placeholder="Phone" required />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input type="text" name="subject" placeholder="Subject" required />
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <textarea name="message" placeholder="Type message"></textarea>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                  <button type="submit" className="theme-btn" name="submit-form">Ask Question<span></span><span></span><span></span><span></span></button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </section>
          {/* contact-section end */}

          {/* cta-style-two */}
          <section className="cta-style-two">
              <div className="auto-container">
                  <div className="inner-container">
                      <div id="particles-js"></div>
                      <div className="content-box">
                          <h2>Expert scientists conducting <br />precise product testing</h2>
                          <div className="btn-box">
                              <Link to="/services" className="theme-btn btn-one mr_20">View Services<span></span><span></span><span></span><span></span></Link>
                              <Link to="/contact" className="theme-btn btn-one">Get in Touch<span></span><span></span><span></span><span></span></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* cta-style-two end */}
      </main>
      <Footer />
    </Layout>
  );
}
