import { Link } from 'react-router-dom';
import Menu from './Menu';
import HeaderRight from './HeaderRight';
import XIcon from './XIcon';

export default function Header5() {
  return (
    <>
              {/* main header */}
              <header className="main-header home-5 header-style-four">
                  {/* header-top */}
                  <div className="header-top">
                      <div className="auto-container">
                          <div className="top-inner">
                              <ul className="social-links">
                                  <li><span>On Social:</span></li>
                                  <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                  <li><Link to="/" aria-label="X"><XIcon size={16} /></Link></li>
                                  <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  {/* header-lower */}
                  <div className="header-lower">
                      <div className="auto-container">
                          <div className="outer-box">
                              <div className="logo-box">
                                  <figure className="logo"><Link to="/"><img src="/assets/images/logo-3.png" alt="" /></Link></figure>
                              </div>
                              <div className="menu-area">
                                  {/*Mobile Navigation Toggler*/}
                                  <div className="mobile-nav-toggler">
                                      <i className="icon-bar"></i>
                                      <i className="icon-bar"></i>
                                      <i className="icon-bar"></i>
                                  </div>
                                  <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                      <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                          <Menu />
                                      </div>
                                  </nav>
                              </div>
                              <HeaderRight />
                          </div>
                      </div>
                  </div>

                  {/*sticky Header*/}
                  <div className="sticky-header">
                      <div className="auto-container">
                          <div className="outer-box">
                              <div className="logo-box">
                                  <figure className="logo"><Link to="/"><img src="/assets/images/logo.png" alt="" /></Link></figure>
                              </div>
                              <div className="menu-area">
                                  <nav className="main-menu clearfix">
                                      <Menu />
                                  </nav>
                              </div>
                              <HeaderRight />
                          </div>
                      </div>
                  </div>
              </header>
              {/* main-header end */}
    </>
  );
}
