import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';
import XIcon from '../components/layout/XIcon';

export default function TeamDetails() {
  return (
    <Layout title="Team Details || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Team Details" />

      {/* team-details */}
      <section className="team-details pt_120 pb_180">
          <div className="auto-container">
              <div className="row clearfix">
                  <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image_block_two">
                          <div className="image-inner pr_110">
                              <figure className="image"><img src="/assets/images/team/team-17.jpg" alt="" /></figure>
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
                      <div className="content-box">
                          <h2>Ronald Richards</h2>
                          <span className="designation">Digital Marketer</span>
                          <p>We appreciate the transparency and open communication provided by the laboratory service throughout our collaboration. Their willingness to discuss methodologies, results, and potential improvements has created.</p>
                          <figure className="signature"><img src="/assets/images/icons/signature-1.png" alt="" /></figure>
                          <h3>More Information</h3>
                          <p>We have been partnering with the laboratory service for several projects, and their commitment to quality assurance is unparalleled. The detailed document action and stringent quality control measures</p>
                          <div className="inner-box pt_25">
                              <div className="row clearfix">
                                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                      <div className="single-item">
                                          <span>Location</span>
                                          <h4>London, United Kingdom</h4>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                      <div className="single-item">
                                          <span>Qualification</span>
                                          <h4>PHD in Bio Chemical</h4>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                      <div className="single-item">
                                          <span>Email</span>
                                          <h4><a href="mailto:Brendan@example.com">Brendan@example.com</a></h4>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                      <div className="single-item">
                                          <span>Awards</span>
                                          <h4>Best Scientist Physics</h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="social-box">
                              <p>Social</p>
                              <ul className="social-links">
                                  <li><Link to="/team-details"><i className="fab fa-facebook-f"></i></Link></li>
                                  <li><Link to="/team-details"><XIcon size={14} /></Link></li>
                                  <li><Link to="/team-details"><i className="fab fa-skype"></i></Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* team-details end */}

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
