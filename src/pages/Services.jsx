import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';
import XIcon from '../components/layout/XIcon';

export default function Services() {
  return (
    <Layout title="Services || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Services" />

      {/* service-section */}
      <section className="service-section pt_120 pb_90">
          <div className="shape">
              <div className="shape-1" style={{ backgroundImage: "url(/assets/images/shape/shape-55.png)" }}></div>
              <div className="shape-2" style={{ backgroundImage: "url(/assets/images/shape/shape-34.png)" }}></div>
          </div>
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

      {/* clients-section */}
      <section className="clients-section style-two">
          <div className="outer-container">
              <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                  <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-1.png" alt="" /></Link></figure>
                  <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-2.png" alt="" /></Link></figure>
                  <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-3.png" alt="" /></Link></figure>
                  <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-4.png" alt="" /></Link></figure>
                  <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-5.png" alt="" /></Link></figure>
                  <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-6.png" alt="" /></Link></figure>
              </div>
          </div>
      </section>
      {/* clients-section end */}

      {/* video-style-two */}
      <section className="video-style-two pt_140 pb_140">
          <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/video-bg-4.jpg)" }}></div>
          <div className="shape">
              <div className="shape-1 zoom-fade" style={{ backgroundImage: "url(/assets/images/shape/shape-39.png)" }}></div>
              <div className="shape-2 zoom-fade" style={{ backgroundImage: "url(/assets/images/shape/shape-56.png)" }}></div>
              <div className="shape-3 zoom-fade" style={{ backgroundImage: "url(/assets/images/shape/shape-57.png)" }}></div>
              <div className="shape-4 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-58.png)" }}></div>
          </div>
          <div className="auto-container">
              <div className="inner-box">
                  <div className="sec-title sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Achieving Efficiencies</span>
                      <h2 className="title-animation mb_40">Expanding Your Test Menu <br />Through Global Logistics</h2>
                      <Link to="/services" className="theme-btn btn-one">Request Appointment<span></span><span></span><span></span><span></span></Link>
                  </div>
                  <div className="video-btn">
                      <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><i className="icon-24"></i></a>
                  </div>
              </div>
          </div>
      </section>
      {/* video-style-two end */}

      {/* team-section */}
      <section className="team-section pt_120 pb_180 centred">
          <div className="auto-container">
              <div className="sec-title mb_70 sec-title-animation animation-style2">
                  <span className="sub-title mb_20 title-animation">Team Members</span>
                  <h2 className="title-animation">Our Expert Scientists</h2>
              </div>
              <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><img src="/assets/images/team/team-1.jpg" alt="" /></figure>
                                  <ul className="social-links">
                                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                      <li><Link to="/"><XIcon size={14} /></Link></li>
                                      <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                  </ul>
                              </div>
                              <div className="lower-content">
                                  <h3><Link to="/team-details">Ronald Richards</Link></h3>
                                  <span className="designation">Scientist</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><img src="/assets/images/team/team-2.jpg" alt="" /></figure>
                                  <ul className="social-links">
                                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                      <li><Link to="/"><XIcon size={14} /></Link></li>
                                      <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                  </ul>
                              </div>
                              <div className="lower-content">
                                  <h3><Link to="/team-details">Theresa Webb</Link></h3>
                                  <span className="designation">Physician</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><img src="/assets/images/team/team-3.jpg" alt="" /></figure>
                                  <ul className="social-links">
                                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                      <li><Link to="/"><XIcon size={14} /></Link></li>
                                      <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                  </ul>
                              </div>
                              <div className="lower-content">
                                  <h3><Link to="/team-details">Brooklyn Simmons</Link></h3>
                                  <span className="designation">Chemist</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><img src="/assets/images/team/team-4.jpg" alt="" /></figure>
                                  <ul className="social-links">
                                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                      <li><Link to="/"><XIcon size={14} /></Link></li>
                                      <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                  </ul>
                              </div>
                              <div className="lower-content">
                                  <h3><Link to="/team-details">Leslie Alexander</Link></h3>
                                  <span className="designation">DNA Developer</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* team-section end */}

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
