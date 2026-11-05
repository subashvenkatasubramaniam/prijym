import { Link } from 'react-router-dom';
import Menu from './Menu';
import HeaderRight from './HeaderRight';

export default function Header3() {
  return (
    <>
              {/* main header */}
              <header className="main-header header-style-three">
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
                              <HeaderRight className="ml_30" />
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
