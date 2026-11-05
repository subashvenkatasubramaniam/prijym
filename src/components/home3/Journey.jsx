export default function Home3Journey() {
  return (
    <>
                  {/* journey-section */}
                  <section className="journey-section">
                      <div className="bg-box">
                          <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/journey-bg.jpg)" }}></div>
                      </div>
                      <div className="auto-container">
                          <div className="inner-container pt_120 pb_120">
                              <div className="sec-title light mb_70 sec-title-animation animation-style2">
                                  <span className="sub-title mb_20 title-animation">Our Timeline</span>
                                  <h2 className="title-animation">Our Journey Map</h2>
                              </div>
                              <div className="slider-content p_relative">
                                  <div className="border-line"></div>
                                  <div className="journey-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                                      <div className="journey-block-one">
                                          <div className="inner-box">
                                              <span className="year">1997</span>
                                              <span className="decore"></span>
                                              <figure className="image-box"><img src="/assets/images/resource/journey-1.jpg" alt="" /></figure>
                                              <h3><a href="index-3.html">The Beginnings</a></h3>
                                              <p>The planning, organizing,  controlling  financial resources, withing including budgeting, accounting,</p>
                                          </div>
                                      </div>
                                      <div className="journey-block-one">
                                          <div className="inner-box">
                                              <span className="year">2003</span>
                                              <span className="decore"></span>
                                              <figure className="image-box"><img src="/assets/images/resource/journey-2.jpg" alt="" /></figure>
                                              <h3><a href="index-3.html">Winning Research Award</a></h3>
                                              <p>Activities related managing organize workforce, including recruitment, the training & evaluation</p>
                                          </div>
                                      </div>
                                      <div className="journey-block-one">
                                          <div className="inner-box">
                                              <span className="year">2018</span>
                                              <span className="decore"></span>
                                              <figure className="image-box"><img src="/assets/images/resource/journey-3.jpg" alt="" /></figure>
                                              <h3><a href="index-3.html">Opening New Laboratory</a></h3>
                                              <p>Managing interactions with customers throughout the entire customer main life cycle, from acquisition</p>
                                          </div>
                                      </div>
                                      <div className="journey-block-one">
                                          <div className="inner-box">
                                              <span className="year">2020</span>
                                              <span className="decore"></span>
                                              <figure className="image-box"><img src="/assets/images/resource/journey-4.jpg" alt="" /></figure>
                                              <h3><a href="index-3.html">Updating Results</a></h3>
                                              <p>The coordination of activities involved in the production and distribution of goods, including procurement</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  {/* journey-section end */}
    </>
  );
}
