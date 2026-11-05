import { Link } from 'react-router-dom';
import XIcon from './XIcon';

export default function Footer() {
  return (
    <>
              {/* main-footer */}
              <footer className="main-footer">
                  <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/background/footer-bg.jpg)" }}></div>
                  <div className="auto-container">
                      <div className="footer-top">
                          <div className="top-inner">
                              <figure className="footer-logo"><img src="/assets/images/logo-2.png" alt="" /></figure>
                              <ul className="footer-menu">
                                  <li><Link to="/">Home</Link></li>
                                  <li><Link to="/about">About</Link></li>
                                  <li><Link to="/research">Research</Link></li>
                                  <li><Link to="/faq">Faq’s</Link></li>
                                  <li><Link to="/contact">Contact Us</Link></li>
                              </ul>
                          </div>
                      </div>
                      <div className="widget-section">
                          <div className="row clearfix">
                              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                  <div className="footer-widget about-widget">
                                      <div className="widget-title">
                                          <h3>About</h3>
                                      </div>
                                      <div className="widget-content">
                                          <p>The Department of Chemical Research Support is a central research resource facility of the Institute of Science.</p>
                                          <ul className="info clearfix">
                                              <li><a href="mailto:info@example.com">info@example.com</a></li>
                                              <li><a href="tel:911202290305">(+91) 120-229-0305</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                  <div className="footer-widget links-widget ml_80">
                                      <div className="widget-title">
                                          <h3>Quick Link</h3>
                                      </div>
                                      <div className="widget-content">
                                          <ul className="links-list clearfix">
                                              <li><Link to="/about">About Company</Link></li>
                                              <li><Link to="/">Our History</Link></li>
                                              <li><Link to="/services">Services</Link></li>
                                              <li><Link to="/">How It Works</Link></li>
                                              <li><Link to="/team">Team Members</Link></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                                  <div className="footer-widget links-widget">
                                      <div className="widget-title">
                                          <h3>Resources</h3>
                                      </div>
                                      <div className="widget-content">
                                          <ul className="links-list clearfix">
                                              <li><Link to="/research">Researches</Link></li>
                                              <li><Link to="/events">Events</Link></li>
                                              <li><Link to="/">Support</Link></li>
                                              <li><Link to="/blog">Our Blog</Link></li>
                                              <li><Link to="/contact">Contact Us</Link></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                  <div className="footer-widget newsletter-widget">
                                      <div className="widget-title">
                                          <h3>Subscribe Newsletter</h3>
                                      </div>
                                      <div className="widget-content">
                                          <p>To add complexity, this is happening against a back drop of significant challenges</p>
                                          <div className="newsletter-form">
                                              <form onSubmit={(e) => e.preventDefault()}>
                                                  <div className="form-group">
                                                      <input type="email" name="email" placeholder="Email Address" required />
                                                      <button type="submit" className="theme-btn">Get in Touch<span></span><span></span><span></span><span></span></button>
                                                  </div>
                                              </form>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="footer-bottom">
                          <div className="bottom-inner">
                              <div className="copyright">
                                  <p>Copyright &copy; 2025 <Link to="/">PRIJYM</Link>, Inc. All Rights Reserved</p>
                              </div>
                              <ul className="social-links">
                                  <li>
                                      <h4>Follow Us On</h4>
                                  </li>
                                  <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                  <li><Link to="/" aria-label="X"><XIcon size={16} /></Link></li>
                                  <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                  <li><Link to="/"><i className="fab fa-dribbble"></i></Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </footer>
              {/* main-footer end */}
    </>
  );
}
