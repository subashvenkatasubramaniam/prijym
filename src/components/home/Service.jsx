import { Link } from 'react-router-dom';

export default function HomeService() {
  return (
    <>
          {/* service-section */}
          <section className="service-section pt_120 pb_90">
              <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/service-bg.jpg)" }}></div>
              <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-8.png)" }}></div>
              <div className="auto-container">
                  <div className="sec-title centred mb_70 sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Our Services</span>
                      <h2 className="title-animation">We Provide Reliable Services</h2>
                  </div>
                  <div className="row clearfix">
                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                              <div className="inner-box">
                                  <div className="icon-box">
                                      <div className="r-hex">
                                          <div className="r-hex-inner"></div>
                                      </div>
                                      <div className="icon"><i className="icon-12"></i></div>
                                  </div>
                                  <h3><Link to="/service-details">Condensate Treatment</Link></h3>
                                  <p>Condensate treatment is a crucial aspect of industrial process, particularly in systems.</p>
                                  <div className="link"><Link to="/service-details">Discover More <i className="fal fa-angle-right"></i></Link></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                              <div className="inner-box">
                                  <div className="icon-box">
                                      <div className="r-hex">
                                          <div className="r-hex-inner"></div>
                                      </div>
                                      <div className="icon"><i className="icon-13"></i></div>
                                  </div>
                                  <h3><Link to="/service-details">Potable Water and Waste</Link></h3>
                                  <p>Potable water treatment processes remove impurities, contaminants, and pathogens.</p>
                                  <div className="link"><Link to="/service-details">Discover More <i className="fal fa-angle-right"></i></Link></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                              <div className="inner-box">
                                  <div className="icon-box">
                                      <div className="r-hex">
                                          <div className="r-hex-inner"></div>
                                      </div>
                                      <div className="icon"><i className="icon-14"></i></div>
                                  </div>
                                  <h3><Link to="/service-details">Cooling Water Treatment</Link></h3>
                                  <p>After treatment, potable water is distribute through well maintained systems of pipes.</p>
                                  <div className="link"><Link to="/service-details">Discover More <i className="fal fa-angle-right"></i></Link></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                              <div className="inner-box">
                                  <div className="icon-box">
                                      <div className="r-hex">
                                          <div className="r-hex-inner"></div>
                                      </div>
                                      <div className="icon"><i className="icon-15"></i></div>
                                  </div>
                                  <h3><Link to="/service-details">Magnetometry Transport</Link></h3>
                                  <p>Protecting water sources, such as rivers, lakes, and aquifers, is critical for maintain.</p>
                                  <div className="link"><Link to="/service-details">Discover More <i className="fal fa-angle-right"></i></Link></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                              <div className="inner-box">
                                  <div className="icon-box">
                                      <div className="r-hex">
                                          <div className="r-hex-inner"></div>
                                      </div>
                                      <div className="icon"><i className="icon-16"></i></div>
                                  </div>
                                  <h3><Link to="/service-details">X-Ray Diffraction</Link></h3>
                                  <p>The key principle behind XRD is Bragg's Law, formulated by Sir William Braggers.</p>
                                  <div className="link"><Link to="/service-details">Discover More <i className="fal fa-angle-right"></i></Link></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                          <div className="service-block-one">
                              <div className="inner-box">
                                  <div className="icon-box">
                                      <div className="r-hex">
                                          <div className="r-hex-inner"></div>
                                      </div>
                                      <div className="icon"><i className="icon-17"></i></div>
                                  </div>
                                  <h3><Link to="/service-details">Mass Chemical Analysis</Link></h3>
                                  <p>Regular monitoring & analysis condensate quality are essential conductivity.</p>
                                  <div className="link"><Link to="/service-details">Discover More <i className="fal fa-angle-right"></i></Link></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* service-section end */}
    </>
  );
}
