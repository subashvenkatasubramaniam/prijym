import { Link } from 'react-router-dom';

export default function HomeFeature() {
  return (
    <>
          {/* feature-section */}
          <section className="feature-section">
              <div className="auto-container">
                  <div className="inner-container clearfix">
                      <div className="feature-block-one">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-4"></i></div>
                              </div>
                              <h3><Link to="/">10+ Research Center</Link></h3>
                              <p>This institute focuses on understanding the molecular mechanisms of diseases into the developing new technologies.</p>
                          </div>
                      </div>
                      <div className="feature-block-one">
                          <div className="inner-box">
                              <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/resource/feature-1.jpg)" }}></div>
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-5"></i></div>
                              </div>
                              <h3><Link to="/">Free Pick Up & Delivery</Link></h3>
                              <p>Free pick-up and delivery services are often offered by businesses to enhance customer convenience</p>
                          </div>
                      </div>
                      <div className="feature-block-one">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-6"></i></div>
                              </div>
                              <h3><Link to="/">24/7 Support Assistant</Link></h3>
                              <p>The support assistant is available 24 hours a day, every day of the week, ensuring continuous accessibility</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* feature-section end */}
    </>
  );
}
