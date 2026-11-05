import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function Events() {
  return (
    <Layout title="Events || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Events" />

          {/* events-section */}
          <section className="events-section events-page-section pt_120">
              <div className="auto-container">
                  <div className="sec-title mb_70 centred sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Events</span>
                      <h2 className="title-animation">Upcoming Events</h2>
                  </div>
                  <div className="row clearfix">
                      <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                          <div className="events-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-1.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>24<span>Jun</span></h2>
                                      </div>
                                      <span className="location-box"><i className="icon-18"></i>United State</span>
                                      <h3><Link to="/events-details">Freshly Cosmetics Payments Makeover</Link></h3>
                                      <p>The Information technology and software in development Problems solutions.</p>
                                      <div className="speakers-box">
                                          <ul className="speakers-list">
                                              <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                                          </ul>
                                          <div className="text">
                                              <h6>10+</h6>
                                              <span>Speakers</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                          <div className="events-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-2.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>12<span>Mar</span></h2>
                                      </div>
                                      <span className="location-box"><i className="icon-18"></i>United State</span>
                                      <h3><Link to="/events-details">Organic Chemistry Research Laboratory</Link></h3>
                                      <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                                      <div className="speakers-box">
                                          <ul className="speakers-list">
                                              <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                                          </ul>
                                          <div className="text">
                                              <h6>10+</h6>
                                              <span>Speakers</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                          <div className="events-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-3.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>16<span>Feb</span></h2>
                                      </div>
                                      <span className="location-box"><i className="icon-18"></i>United State</span>
                                      <h3><Link to="/events-details">The research team is filled with multidisciplinary</Link></h3>
                                      <p>The systematic investigation and experiment to develop new products, processes improve</p>
                                      <div className="speakers-box">
                                          <ul className="speakers-list">
                                              <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                                          </ul>
                                          <div className="text">
                                              <h6>10+</h6>
                                              <span>Speakers</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                          <div className="events-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-5.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>24<span>Jun</span></h2>
                                      </div>
                                      <span className="location-box"><i className="icon-18"></i>United State</span>
                                      <h3><Link to="/events-details">Decade of Action on Nutrition and Global Initiatives</Link></h3>
                                      <p>The Information technology and software in development Problems solutions.</p>
                                      <div className="speakers-box">
                                          <ul className="speakers-list">
                                              <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                                          </ul>
                                          <div className="text">
                                              <h6>10+</h6>
                                              <span>Speakers</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                          <div className="events-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-6.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>12<span>Mar</span></h2>
                                      </div>
                                      <span className="location-box"><i className="icon-18"></i>United State</span>
                                      <h3><Link to="/events-details">Standards and Scientific Advice on Food and Nutrition</Link></h3>
                                      <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                                      <div className="speakers-box">
                                          <ul className="speakers-list">
                                              <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                                          </ul>
                                          <div className="text">
                                              <h6>10+</h6>
                                              <span>Speakers</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                          <div className="events-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-7.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>16<span>Feb</span></h2>
                                      </div>
                                      <span className="location-box"><i className="icon-18"></i>United State</span>
                                      <h3><Link to="/events-details">Monitoring Nutritional Status & Food Safety Events</Link></h3>
                                      <p>The systematic investigation and experiment to develop new products, processes improve</p>
                                      <div className="speakers-box">
                                          <ul className="speakers-list">
                                              <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                                          </ul>
                                          <div className="text">
                                              <h6>10+</h6>
                                              <span>Speakers</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                          <div className="events-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-8.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>24<span>Jun</span></h2>
                                      </div>
                                      <span className="location-box"><i className="icon-18"></i>United State</span>
                                      <h3><Link to="/events-details">Energy Information Administration Program</Link></h3>
                                      <p>The Information technology and software in development Problems solutions.</p>
                                      <div className="speakers-box">
                                          <ul className="speakers-list">
                                              <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                                          </ul>
                                          <div className="text">
                                              <h6>10+</h6>
                                              <span>Speakers</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                          <div className="events-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-9.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>12<span>Mar</span></h2>
                                      </div>
                                      <span className="location-box"><i className="icon-18"></i>United State</span>
                                      <h3><Link to="/events-details">Standards and Scientific Advice on Food and Nutrition</Link></h3>
                                      <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                                      <div className="speakers-box">
                                          <ul className="speakers-list">
                                              <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                                          </ul>
                                          <div className="text">
                                              <h6>10+</h6>
                                              <span>Speakers</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                          <div className="events-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-10.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>16<span>Feb</span></h2>
                                      </div>
                                      <span className="location-box"><i className="icon-18"></i>United State</span>
                                      <h3><Link to="/events-details">Monitoring Nutritional Status & Food Safety Events</Link></h3>
                                      <p>The systematic investigation and experiment to develop new products, processes improve</p>
                                      <div className="speakers-box">
                                          <ul className="speakers-list">
                                              <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                                              <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                                          </ul>
                                          <div className="text">
                                              <h6>10+</h6>
                                              <span>Speakers</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="pagination-wrapper pt_30 centred">
                      <ul className="pagination clearfix">
                          <li><Link to="/events" className="current">1</Link></li>
                          <li><Link to="/events">2</Link></li>
                          <li><Link to="/events">3</Link></li>
                          <li><span>...</span></li>
                          <li><Link to="/events">8</Link></li>
                          <li><Link to="/events"><i className="icon-36"></i></Link></li>
                      </ul>
                  </div>
              </div>
          </section>
          {/* events-section end */}

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
