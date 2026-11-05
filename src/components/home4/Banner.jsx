export default function Home4Banner() {
  return (
    <>
      {/* banner-style-four */}
                  <section className="banner-style-four p_relative">
                      <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-34.png)" }}></div>
                      <div className="image-layer">
                          <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/banner/banner-5.jpg)" }}></div>
                          <figure className="image float-bob-y"><img src="/assets/images/banner/banner-img-2.png" alt="" /></figure>
                      </div>
                      <div className="auto-container">
                          <div className="row clearfix">
                              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                  <div className="content-box">
                                      <span className="sub-title mb_15">Laboratory</span>
                                      <h2>Micro Biology <span>Research Institution</span></h2>
                                      <p>Equipped with cutting-edge Technology and specialized facilities, our laboratories provide ideal environment.</p>
                                      <div className="btn-box mb_75">
                                          <a href="contact.html" className="theme-btn btn-one">Get in Touch<span></span><span></span><span></span><span></span></a>
                                      </div>
                                      <div className="funfact-inner">
                                          <div className="single-item">
                                              <div className="count-outer count-box">
                                                  <span className="odometer" data-count="58">00</span>
                                              </div>
                                              <h3>Projects</h3>
                                          </div>
                                          <div className="single-item">
                                              <div className="count-outer count-box">
                                                  <span className="odometer" data-count="85">00</span>
                                              </div>
                                              <h3>People</h3>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  {/* banner-style-four end */}
    </>
  );
}
