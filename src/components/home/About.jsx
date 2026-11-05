import { Link } from 'react-router-dom';

export default function HomeAbout() {
  return (
    <>
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
    </>
  );
}
