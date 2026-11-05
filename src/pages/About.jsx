import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';
import XIcon from '../components/layout/XIcon';

export default function About() {
  return (
    <Layout title="About Us || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="About Us" />

          {/* about-style-two */}
          <section className="about-style-two pt_120 pb_120">
              <div className="pattern-layer">
                  <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-14.png)" }}></div>
              </div>
              <div className="auto-container">
                  <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                          <div className="content_block_one">
                              <div className="content-box mt_25 mr_70 sec-title-animation animation-style2">
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
                      <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                          <div className="image_block_two">
                              <div className="image-inner">
                                  <div className="image-shape">
                                      <div className="shape-1" style={{ backgroundImage: "url(/assets/images/shape/shape-12.png)" }}></div>
                                      <div className="shape-2" style={{ backgroundImage: "url(/assets/images/shape/shape-12.png)" }}></div>
                                  </div>
                                  <div className="row clearfix">
                                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                          <div className="image-box">
                                              <figure className="image mb_30"><img src="/assets/images/resource/about-1.jpg" alt="" /></figure>
                                              <div className="experience-box bounce-slide">
                                                  <div className="inner p_relative pt_5 pb_5">
                                                      <h2>25 <span>Years</span></h2>
                                                      <h3>Of Experience in the Finance Service</h3>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                          <figure className="image pt_100 mt_15"><img src="/assets/images/resource/about-2.jpg" alt="" /></figure>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* about-style-two end */}

          {/* funfact-style-two */}
          <section className="funfact-style-two pt_130 pb_120">
              <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/funfact-bg-2.jpg)" }}></div>
              <div className="pattern-layer">
                  <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/shape-28.png)" }}></div>
                  <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-29.png)" }}></div>
              </div>
              <div className="auto-container">
                  <div className="row clearfix">
                      <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                          <div className="funfact-block-one">
                              <div className="inner-box">
                                  <div className="icon-box"><i className="icon-8"></i></div>
                                  <div className="count-outer count-box">
                                      <span className="odometer" data-count="320">00</span><span>+</span>
                                  </div>
                                  <p>Hours Generated</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                          <div className="funfact-block-one">
                              <div className="inner-box">
                                  <div className="icon-box"><i className="icon-9"></i></div>
                                  <div className="count-outer count-box">
                                      <span className="odometer" data-count="94">00</span><span>k+</span>
                                  </div>
                                  <p>Tasks Completed</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                          <div className="funfact-block-one">
                              <div className="inner-box">
                                  <div className="icon-box"><i className="icon-10"></i></div>
                                  <div className="count-outer count-box">
                                      <span className="odometer" data-count="50">00</span><span>k+</span>
                                  </div>
                                  <p>Worldwide Users</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                          <div className="funfact-block-one">
                              <div className="inner-box">
                                  <div className="icon-box"><i className="icon-11"></i></div>
                                  <div className="count-outer count-box">
                                      <span className="odometer" data-count="45">00</span><span>k+</span>
                                  </div>
                                  <p>Projects Completed</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* funfact-style-two end */}

          {/* working-style-two */}
          <section className="working-style-two about-page centred pt_120 pb_110">
              <div className="pattern-layer">
                  <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-11.png)" }}></div>
              </div>
              <div className="auto-container">
                  <div className="sec-title mb_70 sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Our Process</span>
                      <h2 className="title-animation">How We Work</h2>
                  </div>
                  <div className="lower-content">
                      <div className="row clearfix">
                          <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                              <div className="working-block-two">
                                  <div className="inner-box">
                                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                                      <div className="icon-box">
                                          <div className="r-hex">
                                              <div className="r-hex-inner"></div>
                                          </div>
                                          <div className="icon"><i className="icon-25"></i></div>
                                      </div>
                                      <h3><Link to="/index-2">Client Briefs Project</Link></h3>
                                      <p>The more details you can provide, the better lab can assist you</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                              <div className="working-block-two">
                                  <div className="inner-box">
                                      <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-16.png)" }}></div>
                                      <div className="icon-box">
                                          <div className="r-hex">
                                              <div className="r-hex-inner"></div>
                                          </div>
                                          <div className="icon"><i className="icon-26"></i></div>
                                      </div>
                                      <h3><Link to="/index-2">Lab Start Testing</Link></h3>
                                      <p>Specify the criteria for success and the key performance indicators</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                              <div className="working-block-two">
                                  <div className="inner-box">
                                      <div className="icon-box">
                                          <div className="r-hex">
                                              <div className="r-hex-inner"></div>
                                          </div>
                                          <div className="icon"><i className="icon-27"></i></div>
                                      </div>
                                      <h3><Link to="/index-2">Reports Delivered</Link></h3>
                                      <p>Our team is available for a follow-up meeting to discuss the contents</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* working-style-two end */}

          {/* service-style-two */}
          <section className="service-style-two pt_120 pb_120">
              <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/service-bg-2.jpg)" }}></div>
              <div className="auto-container">
                  <div className="sec-title centred mb_70 sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Our Services</span>
                      <h2 className="title-animation">Services We Provide</h2>
                  </div>
                  <div className="tabs-box">
                      <div className="tab-btn-box p_relative mb_110">
                          <ul className="tab-btns tab-buttons clearfix">
                              <li className="tab-btn active-btn" data-tab="#tab-1">Chemical Research</li>
                              <li className="tab-btn" data-tab="#tab-2">Covid 19 Vaccine</li>
                              <li className="tab-btn" data-tab="#tab-3">Genetics Research</li>
                              <li className="tab-btn" data-tab="#tab-4">Virus Detection</li>
                              <li className="tab-btn" data-tab="#tab-5">Blood Cell Reseach</li>
                              <li className="tab-btn" data-tab="#tab-6">Dynamic Physics</li>
                          </ul>
                      </div>
                      <div className="tabs-content">
                          <div className="tab active-tab" id="tab-1">
                              <div className="row clearfix">
                                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                      <div className="content_block_two">
                                          <div className="content-box mr_50">
                                              <h2>Well Ensure You Always Get The Best Results.</h2>
                                              <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime</p>
                                              <ul className="list-style-two mb_40 clearfix">
                                                  <li>X-rays passing through a crystal generate a diffraction.</li>
                                                  <li>The key principle behind XRD is Bragg's Law, formulated.</li>
                                                  <li>Compliance with environmental regulations and standards.</li>
                                              </ul>
                                              <div className="btn-box"><Link to="/services" className="theme-btn btn-one">Get Service<span></span><span></span><span></span><span></span></Link></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                      <div className="image-box ml_80">
                                          <figure className="image"><img src="/assets/images/service/service-1.jpg" alt="" /></figure>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab" id="tab-2">
                              <div className="row clearfix">
                                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                      <div className="content_block_two">
                                          <div className="content-box mr_50">
                                              <h2>Well Ensure You Always Covid 19 Vaccine</h2>
                                              <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime</p>
                                              <ul className="list-style-two mb_40 clearfix">
                                                  <li>X-rays passing through a crystal generate a diffraction.</li>
                                                  <li>The key principle behind XRD is Bragg's Law, formulated.</li>
                                                  <li>Compliance with environmental regulations and standards.</li>
                                              </ul>
                                              <div className="btn-box"><Link to="/services" className="theme-btn btn-one">Get Service<span></span><span></span><span></span><span></span></Link></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                      <div className="image-box ml_80">
                                          <figure className="image"><img src="/assets/images/service/service-1.jpg" alt="" /></figure>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab" id="tab-3">
                              <div className="row clearfix">
                                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                      <div className="content_block_two">
                                          <div className="content-box mr_50">
                                              <h2>Well Ensure You Always Get Genetics Research</h2>
                                              <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime</p>
                                              <ul className="list-style-two mb_40 clearfix">
                                                  <li>X-rays passing through a crystal generate a diffraction.</li>
                                                  <li>The key principle behind XRD is Bragg's Law, formulated.</li>
                                                  <li>Compliance with environmental regulations and standards.</li>
                                              </ul>
                                              <div className="btn-box"><Link to="/services" className="theme-btn btn-one">Get Service<span></span><span></span><span></span><span></span></Link></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                      <div className="image-box ml_80">
                                          <figure className="image"><img src="/assets/images/service/service-1.jpg" alt="" /></figure>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab" id="tab-4">
                              <div className="row clearfix">
                                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                      <div className="content_block_two">
                                          <div className="content-box mr_50">
                                              <h2>Well Ensure You Always Get The Virus Detection</h2>
                                              <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime</p>
                                              <ul className="list-style-two mb_40 clearfix">
                                                  <li>X-rays passing through a crystal generate a diffraction.</li>
                                                  <li>The key principle behind XRD is Bragg's Law, formulated.</li>
                                                  <li>Compliance with environmental regulations and standards.</li>
                                              </ul>
                                              <div className="btn-box"><Link to="/services" className="theme-btn btn-one">Get Service<span></span><span></span><span></span><span></span></Link></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                      <div className="image-box ml_80">
                                          <figure className="image"><img src="/assets/images/service/service-1.jpg" alt="" /></figure>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab" id="tab-5">
                              <div className="row clearfix">
                                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                      <div className="content_block_two">
                                          <div className="content-box mr_50">
                                              <h2>Well Ensure You Always Get Blood Cell Reseach</h2>
                                              <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime</p>
                                              <ul className="list-style-two mb_40 clearfix">
                                                  <li>X-rays passing through a crystal generate a diffraction.</li>
                                                  <li>The key principle behind XRD is Bragg's Law, formulated.</li>
                                                  <li>Compliance with environmental regulations and standards.</li>
                                              </ul>
                                              <div className="btn-box"><Link to="/services" className="theme-btn btn-one">Get Service<span></span><span></span><span></span><span></span></Link></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                      <div className="image-box ml_80">
                                          <figure className="image"><img src="/assets/images/service/service-1.jpg" alt="" /></figure>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="tab" id="tab-6">
                              <div className="row clearfix">
                                  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                      <div className="content_block_two">
                                          <div className="content-box mr_50">
                                              <h2>Well Ensure You Always Get The Dynamic Physics</h2>
                                              <p>AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime</p>
                                              <ul className="list-style-two mb_40 clearfix">
                                                  <li>X-rays passing through a crystal generate a diffraction.</li>
                                                  <li>The key principle behind XRD is Bragg's Law, formulated.</li>
                                                  <li>Compliance with environmental regulations and standards.</li>
                                              </ul>
                                              <div className="btn-box"><Link to="/services" className="theme-btn btn-one">Get Service<span></span><span></span><span></span><span></span></Link></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                      <div className="image-box ml_80">
                                          <figure className="image"><img src="/assets/images/service/service-1.jpg" alt="" /></figure>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* service-style-two end */}

          {/* testimonial-section */}
          <section className="testimonial-section pt_120 pb_120">
              <div className="auto-container">
                  <div className="sec-title centred mb_70 sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Testimonials</span>
                      <h2 className="title-animation">Love from Clients</h2>
                  </div>
                  <div className="two-item-carousel owl-carousel owl-theme dots-style-one owl-nav-none">
                      <div className="testimonial-block-one">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-35"></i></div>
                              </div>
                              <p>"We have been relying on the laboratory services for years, and the consistently reliable results have played a crucial role in maintaining the high standards of our product quality. The professionalism and expertise of the staff are truly commendable."</p>
                              <div className="lower-box">
                                  <div className="author-box">
                                      <figure className="thumb-box"><img src="/assets/images/resource/testimonial-1.png" alt="" /></figure>
                                      <h3>Jenifer Laurence</h3>
                                      <span className="designation">Manager</span>
                                  </div>
                                  <ul className="rating">
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="testimonial-block-one">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-35"></i></div>
                              </div>
                              <p>"The laboratory service exceeded our expectations in terms of these reliability and precision. The team demonstrated a commitment to the excellence, and their attention to detail ensured that our experiments were conducted with the utmost accuracy."</p>
                              <div className="lower-box">
                                  <div className="author-box">
                                      <figure className="thumb-box"><img src="/assets/images/resource/testimonial-2.png" alt="" /></figure>
                                      <h3>Brooklyn Simmons</h3>
                                      <span className="designation">Designer</span>
                                  </div>
                                  <ul className="rating">
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="testimonial-block-one">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-35"></i></div>
                              </div>
                              <p>"We have been relying on the laboratory services for years, and the consistently reliable results have played a crucial role in maintaining the high standards of our product quality. The professionalism and expertise of the staff are truly commendable."</p>
                              <div className="lower-box">
                                  <div className="author-box">
                                      <figure className="thumb-box"><img src="/assets/images/resource/testimonial-1.png" alt="" /></figure>
                                      <h3>Jenifer Laurence</h3>
                                      <span className="designation">Manager</span>
                                  </div>
                                  <ul className="rating">
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="testimonial-block-one">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-35"></i></div>
                              </div>
                              <p>"The laboratory service exceeded our expectations in terms of these reliability and precision. The team demonstrated a commitment to the excellence, and their attention to detail ensured that our experiments were conducted with the utmost accuracy."</p>
                              <div className="lower-box">
                                  <div className="author-box">
                                      <figure className="thumb-box"><img src="/assets/images/resource/testimonial-2.png" alt="" /></figure>
                                      <h3>Brooklyn Simmons</h3>
                                      <span className="designation">Designer</span>
                                  </div>
                                  <ul className="rating">
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="testimonial-block-one">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-35"></i></div>
                              </div>
                              <p>"We have been relying on the laboratory services for years, and the consistently reliable results have played a crucial role in maintaining the high standards of our product quality. The professionalism and expertise of the staff are truly commendable."</p>
                              <div className="lower-box">
                                  <div className="author-box">
                                      <figure className="thumb-box"><img src="/assets/images/resource/testimonial-1.png" alt="" /></figure>
                                      <h3>Jenifer Laurence</h3>
                                      <span className="designation">Manager</span>
                                  </div>
                                  <ul className="rating">
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="testimonial-block-one">
                          <div className="inner-box">
                              <div className="icon-box">
                                  <div className="r-hex">
                                      <div className="r-hex-inner"></div>
                                  </div>
                                  <div className="icon"><i className="icon-35"></i></div>
                              </div>
                              <p>"The laboratory service exceeded our expectations in terms of these reliability and precision. The team demonstrated a commitment to the excellence, and their attention to detail ensured that our experiments were conducted with the utmost accuracy."</p>
                              <div className="lower-box">
                                  <div className="author-box">
                                      <figure className="thumb-box"><img src="/assets/images/resource/testimonial-2.png" alt="" /></figure>
                                      <h3>Brooklyn Simmons</h3>
                                      <span className="designation">Designer</span>
                                  </div>
                                  <ul className="rating">
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                      <li><i className="fas fa-star"></i></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* testimonial-section end */}

          {/* team-section */}
          <section className="team-section about-page centred">
              <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/background/team-bg.png)" }}></div>
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
