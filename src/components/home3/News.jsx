export default function Home3News() {
  return (
    <>
                  {/* news-section */}
                  <section className="news-section pb_180">
                      <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/background/team-bg.png)" }}></div>
                      <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-33.png)" }}></div>
                      <div className="auto-container">
                          <div className="sec-title centred mb_70 sec-title-animation animation-style2">
                              <span className="sub-title mb_20 title-animation">News</span>
                              <h2 className="title-animation">Latest Media Update</h2>
                          </div>
                          <div className="row clearfix">
                              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                  <div className="news-block-one">
                                      <div className="inner-box">
                                          <figure className="image-box"><a href="events-details.html"><img src="/assets/images/news/news-1.jpg" alt="" /></a></figure>
                                          <div className="lower-content">
                                              <div className="post-date"><h2>24<span>Jun</span></h2></div>
                                              <span className="category">Research</span>
                                              <h3><a href="blog-details.html">Testing giant invests millions in Conncected</a></h3>
                                              <p>The Information technology and software in development Problems solutions.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                  <div className="news-block-one">
                                      <div className="inner-box">
                                          <figure className="image-box"><a href="events-details.html"><img src="/assets/images/news/news-2.jpg" alt="" /></a></figure>
                                          <div className="lower-content">
                                              <div className="post-date"><h2>23<span>Jun</span></h2></div>
                                              <span className="category">Physics</span>
                                              <h3><a href="blog-details.html">Slipping on ice may be down to too much</a></h3>
                                              <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                  <div className="news-block-one">
                                      <div className="inner-box">
                                          <figure className="image-box"><a href="events-details.html"><img src="/assets/images/news/news-3.jpg" alt="" /></a></figure>
                                          <div className="lower-content">
                                              <div className="post-date"><h2>22<span>Jun</span></h2></div>
                                              <span className="category">Chemistry</span>
                                              <h3><a href="blog-details.html">Sustainability transformers win £100k in RSC</a></h3>
                                              <p>The systematic investigation and experiment to develop new products, processes improve</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  {/* news-section end */}
    </>
  );
}
