import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';
import XIcon from '../components/layout/XIcon';

export default function Team2() {
  return (
    <Layout title="Our Expert Team || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Our Expert Team" />

      {/* team-style-two */}
      <section className="team-style-two pt_90 pb_180 centred">
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
                                  <figure className="image"><img src="/assets/images/team/team-5.jpg" alt="" /></figure>
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
                                  <figure className="image"><img src="/assets/images/team/team-6.jpg" alt="" /></figure>
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
                                  <figure className="image"><img src="/assets/images/team/team-7.jpg" alt="" /></figure>
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
                                  <figure className="image"><img src="/assets/images/team/team-8.jpg" alt="" /></figure>
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
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><img src="/assets/images/team/team-13.jpg" alt="" /></figure>
                                  <ul className="social-links">
                                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                      <li><Link to="/"><XIcon size={14} /></Link></li>
                                      <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                  </ul>
                              </div>
                              <div className="lower-content">
                                  <h3><Link to="/team-details">Alex Morgan</Link></h3>
                                  <span className="designation">Doctor</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><img src="/assets/images/team/team-14.jpg" alt="" /></figure>
                                  <ul className="social-links">
                                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                      <li><Link to="/"><XIcon size={14} /></Link></li>
                                      <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                  </ul>
                              </div>
                              <div className="lower-content">
                                  <h3><Link to="/team-details">Cristiano Ronaldo</Link></h3>
                                  <span className="designation">Consultant</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><img src="/assets/images/team/team-15.jpg" alt="" /></figure>
                                  <ul className="social-links">
                                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                      <li><Link to="/"><XIcon size={14} /></Link></li>
                                      <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                  </ul>
                              </div>
                              <div className="lower-content">
                                  <h3><Link to="/team-details">Jacob Jones</Link></h3>
                                  <span className="designation">Scientist</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                      <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                              <div className="image-box">
                                  <figure className="image"><img src="/assets/images/team/team-16.jpg" alt="" /></figure>
                                  <ul className="social-links">
                                      <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                      <li><Link to="/"><XIcon size={14} /></Link></li>
                                      <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                  </ul>
                              </div>
                              <div className="lower-content">
                                  <h3><Link to="/team-details">Floyd Miles</Link></h3>
                                  <span className="designation">Scientist</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* team-style-two end */}

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
