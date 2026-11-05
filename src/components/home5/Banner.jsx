export default function Home5Banner() {
  return (
    <>
                  {/* banner-style-five */}
                  <section className="banner-style-five p_relative">
                      <div className="pattern-layer">
                          <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/shape-34.png)" }}></div>
                          <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-40.png)" }}></div>
                      </div>
                      <div className="auto-container">
                          <div className="row align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                  <div className="content-box">
                                      <span className="sub-title mb_20">Laboratory</span>
                                      <h2>Elevating Research <span>Excellence Discovery</span></h2>
                                      <p>Delving into the properties and potential applications of lesser known and rarely studied elements on the periodic table.</p>
                                      <a href="contact.html" className="theme-btn btn-one">Get in Touch<span></span><span></span><span></span><span></span></a>
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                  <div className="image-box">
                                      <div className="image-shape">
                                          <div className="shape-1 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-41.png)" }}></div>
                                          <div className="shape-2 zoom-fade" style={{ backgroundImage: "url(/assets/images/shape/shape-42.png)" }}></div>
                                          <div className="shape-3 zoom-fade" style={{ backgroundImage: "url(/assets/images/shape/shape-43.png)" }}></div>
                                      </div>
                                      <figure className="image float-bob-y"><img src="/assets/images/banner/banner-img-3.png" alt="" /></figure>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  {/* banner-style-five end */}
    </>
  );
}
