export default function Home3Banner() {
  return (
    <>
                  {/* banner-style-two */}
                  <section className="banner-style-three p_relative">
                      <div className="pattern-layer">
                          <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/shape-20.png)" }}></div>
                          <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-21.png)" }}></div>
                          <div className="pattern-3" style={{ backgroundImage: "url(/assets/images/shape/shape-22.png)" }}></div>
                          <div className="pattern-4 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-23.png)" }}></div>
                          <div className="pattern-5 zoom-fade" style={{ backgroundImage: "url(/assets/images/shape/shape-24.png)" }}></div>
                      </div>
                      <div className="auto-container">
                          <div className="inner-box">
                              <div className="row clearfix">
                                  <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                      <div className="content-box">
                                          <span className="sub-title mb_20">Laboratory</span>
                                          <h2>Rare Chemistry <span>Research Documentation</span></h2>
                                          <p>We actively promote interdisciplinary collaboration, encouraging researchers to work at the intersection of chemistry.</p>
                                          <a href="index-3.html" className="theme-btn btn-one">Get in Touch<span></span><span></span><span></span><span></span></a>
                                      </div>
                                  </div>
                              </div>
                              <div className="image-box">
                                  <figure className="image"><img src="/assets/images/banner/banner-img-1.png" alt="" /></figure>
                                  <div className="support-box">
                                      <div className="icon-box"><i className="icon-32"></i></div>
                                      <span>For Emergency</span>
                                      <a href="tel:180040070400">1-800-400-70400</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  {/* banner-style-two end */}
    </>
  );
}
