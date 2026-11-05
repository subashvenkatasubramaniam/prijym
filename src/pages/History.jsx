import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function History() {
  return (
    <Layout title="Our History || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Our History" />

          {/* about-section */}
          <section className="about-section pt_130 pb_120">
              <div className="pattern-layer">
                  <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}></div>
                  <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}></div>
                  <div className="pattern-3" style={{ backgroundImage: "url(/assets/images/shape/shape-6.png)" }}></div>
              </div>
              <div className="auto-container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                          <div className="image_block_one">
                              <div className="image-box pl_80 pr_65 pb_40">
                                  <div className="image-shape">
                                      <div className="shape-1" style={{ backgroundImage: "url(/assets/images/shape/shape-2.png)" }}></div>
                                      <div className="shape-2" style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}></div>
                                  </div>
                                  <figure className="image"><img src="/assets/images/resource/about-1.png" alt="" /></figure>
                                  <div className="image-content centred bounce-slide">
                                      <h2>20</h2>
                                      <h4>Years of expericence</h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                          <div className="content_block_one">
                              <div className="content-box ml_30 sec-title-animation animation-style2">
                                  <div className="sec-title mb_25">
                                      <span className="sub-title mb_20 title-animation">Laboratory</span>
                                      <h2 className="title-animation">We Provide Reliable & High-Quality Clinical Service</h2>
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
          {/* about-section end */}

          {/* history-section */}
          <section className="history-section">
              <div className="auto-container">
                  <div className="sec-title mb_70 centred sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">History</span>
                      <h2 className="title-animation">Our Journey Map</h2>
                  </div>
                  <div className="inner-container p_relative">
                      <div className="border-line"></div>
                      <div className="inner-box p_relative mb_80">
                          <figure className="image-box"><img src="/assets/images/resource/history-1.jpg" alt="" /></figure>
                          <span className="year">1997</span>
                          <div className="content-box">
                              <h3><Link to="/history">The Beginnings</Link></h3>
                              <p>Choose a suitable location for your laboratory, considering factors such as accessibility, space requirements, and proximity to potential collaborators.</p>
                          </div>
                      </div>
                      <div className="inner-box p_relative mb_80">
                          <div className="content-box">
                              <h3><Link to="/history">The Beginnings</Link></h3>
                              <p>Winning a research award is a significant achievement and a testament to your hard work, dedication, and contributions to your field of study.</p>
                          </div>
                          <span className="year">2003</span>
                          <figure className="image-box"><img src="/assets/images/resource/history-2.jpg" alt="" /></figure>
                      </div>
                      <div className="inner-box p_relative mb_80">
                          <figure className="image-box"><img src="/assets/images/resource/history-3.jpg" alt="" /></figure>
                          <span className="year">2008</span>
                          <div className="content-box">
                              <h3><Link to="/history">Opening New Laboratory</Link></h3>
                              <p>Choose a location that meets the specific needs of your research. Consider factors such as proximity to collaborators, accessibility, and availability necessary utilities & infrastructure.</p>
                          </div>
                      </div>
                      <div className="inner-box p_relative">
                          <div className="content-box">
                              <h3><Link to="/history">Updating Equipment</Link></h3>
                              <p>Determine the budget required for updating the equipment. Explore funding options, including grants, institutional support, or collaborations with industry partners.</p>
                          </div>
                          <span className="year">2016</span>
                          <figure className="image-box"><img src="/assets/images/resource/history-4.jpg" alt="" /></figure>
                      </div>
                  </div>
              </div>
          </section>
          {/* history-section end */}

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
