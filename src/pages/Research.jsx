import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function Research() {
  return (
    <Layout title="Research || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Research" />

      {/* about-style-three */}
      <section className="about-style-three pt_120 pb_120">
          <div className="auto-container">
              <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image_block_two">
                          <div className="image-inner mr_30 pr_120">
                              <figure className="image"><img src="/assets/images/resource/about-3.jpg" alt="" /></figure>
                              <div className="experience-box bounce-slide">
                                  <div className="inner p_relative pt_19 pb_19">
                                      <h2>25 <span>Years</span></h2>
                                      <h3>Of Experience in Lab Research</h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content_block_one">
                          <div className="content-box ml_30 sec-title-animation animation-style2">
                              <div className="sec-title mb_25">
                                  <span className="sub-title mb_20 title-animation">Laboratory</span>
                                  <h2 className="title-animation">We Provide Reliable & High- Quality Clinical Service</h2>
                              </div>
                              <div className="text-box mb_45 title-animation">
                                  <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in the realm of uncommon & extraordinary chemical phenomena.</p>
                                  <ul className="list-style-one clearfix">
                                      <li>Modify the theming of the prebuilt automation platform</li>
                                      <li>Override the default strings for any element</li>
                                  </ul>
                              </div>
                              <div className="btn-box">
                                  <Link to="/about" className="theme-btn">Get in Touch<span></span><span></span><span></span><span></span></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* about-style-three end */}

      {/* feature-style-three */}
      <section className="feature-style-three pb_90">
          <div className="auto-container">
              <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                      <div className="feature-block-three wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-19"></i></div>
                              </div>
                              <h4>100% Customer Satisfaction</h4>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                      <div className="feature-block-three wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-22"></i></div>
                              </div>
                              <h4>Help and access is our mission</h4>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                      <div className="feature-block-three wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-21"></i></div>
                              </div>
                              <h4>100% quality laboratory service</h4>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                      <div className="feature-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-69"></i></div>
                              </div>
                              <h4>24/7 Support for Clients</h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* feature-style-three end */}

      {/* research-section */}
      <section className="research-section pt_120 pb_90">
          <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/research-bg.jpg)" }}></div>
          <div className="auto-container">
              <div className="inner-container p_relative z_5">
                  <div className="sec-title light centred mb_70 sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Researches</span>
                      <h2 className="title-animation">Our Researches</h2>
                  </div>
                  <div className="row clearfix">
                      <div className="col-lg-3 col-md-6 col-sm-12 research-block">
                          <div className="research-block-one">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="overlay-image"><img src="/assets/images/resource/research-1.jpg" alt="" /></figure>
                                      <figure className="image"><img src="/assets/images/resource/research-1.jpg" alt="" /></figure>
                                  </div>
                                  <div className="text-box">
                                      <h3><Link to="/index-4">Cooling Treatment</Link></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 research-block">
                          <div className="research-block-one">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="overlay-image"><img src="/assets/images/resource/research-2.jpg" alt="" /></figure>
                                      <figure className="image"><img src="/assets/images/resource/research-2.jpg" alt="" /></figure>
                                  </div>
                                  <div className="text-box">
                                      <h3><Link to="/index-4">Bio Science</Link></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 research-block">
                          <div className="research-block-one">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="overlay-image"><img src="/assets/images/resource/research-3.jpg" alt="" /></figure>
                                      <figure className="image"><img src="/assets/images/resource/research-3.jpg" alt="" /></figure>
                                  </div>
                                  <div className="text-box">
                                      <h3><Link to="/index-4">DNA Replacement</Link></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 research-block">
                          <div className="research-block-one">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="overlay-image"><img src="/assets/images/resource/research-4.jpg" alt="" /></figure>
                                      <figure className="image"><img src="/assets/images/resource/research-4.jpg" alt="" /></figure>
                                  </div>
                                  <div className="text-box">
                                      <h3><Link to="/index-4">Bacteria Detection</Link></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 research-block">
                          <div className="research-block-one">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="overlay-image"><img src="/assets/images/resource/research-5.jpg" alt="" /></figure>
                                      <figure className="image"><img src="/assets/images/resource/research-5.jpg" alt="" /></figure>
                                  </div>
                                  <div className="text-box">
                                      <h3><Link to="/index-4">Chemical Research</Link></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 research-block">
                          <div className="research-block-one">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="overlay-image"><img src="/assets/images/resource/research-6.jpg" alt="" /></figure>
                                      <figure className="image"><img src="/assets/images/resource/research-6.jpg" alt="" /></figure>
                                  </div>
                                  <div className="text-box">
                                      <h3><Link to="/index-4">Micro Organs</Link></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 research-block">
                          <div className="research-block-one">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="overlay-image"><img src="/assets/images/resource/research-7.jpg" alt="" /></figure>
                                      <figure className="image"><img src="/assets/images/resource/research-7.jpg" alt="" /></figure>
                                  </div>
                                  <div className="text-box">
                                      <h3><Link to="/index-4">Blood DNA Detect</Link></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 research-block">
                          <div className="research-block-one">
                              <div className="inner-box">
                                  <div className="image-box">
                                      <figure className="overlay-image"><img src="/assets/images/resource/research-8.jpg" alt="" /></figure>
                                      <figure className="image"><img src="/assets/images/resource/research-8.jpg" alt="" /></figure>
                                  </div>
                                  <div className="text-box">
                                      <h3><Link to="/index-4">Medical Research</Link></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* research-section end */}

      {/* working-style-three */}
      <section className="working-style-three centred pt_120 pb_180">
          <div className="pattern-layer">
              <div className="pattern-1 zoom-fade" style={{ backgroundImage: "url(/assets/images/shape/shape-50.png)" }}></div>
              <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-51.png)" }}></div>
          </div>
          <div className="auto-container">
              <div className="sec-title mb_70 sec-title-animation animation-style2">
                  <span className="sub-title mb_20 title-animation">Working Process</span>
                  <h2 className="title-animation">Our Working Process</h2>
              </div>
              <div className="inner-container">
                  <div className="working-block-three">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-49.png)" }}></div>
                      <div className="inner-box">
                          <div className="count-box">
                              <div className="inner">
                                  <h2>01</h2>
                                  <h6>Step</h6>
                              </div>
                          </div>
                          <h3>Client Briefs <br />Project</h3>
                      </div>
                  </div>
                  <div className="working-block-three">
                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-49.png)" }}></div>
                      <div className="inner-box">
                          <div className="count-box">
                              <div className="inner">
                                  <h2>02</h2>
                                  <h6>Step</h6>
                              </div>
                          </div>
                          <h3>Lab Start <br />Testing</h3>
                      </div>
                  </div>
                  <div className="working-block-three">
                      <div className="inner-box">
                          <div className="count-box">
                              <div className="inner">
                                  <h2>03</h2>
                                  <h6>Step</h6>
                              </div>
                          </div>
                          <h3>Reports <br />Delivered</h3>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* working-style-three end */}

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
