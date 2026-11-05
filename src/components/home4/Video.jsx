export default function Home4Video() {
  return (
    <>
                  {/* video-section */}
                  <section className="video-section pt_120 centred">
                      <div className="bg-box">
                          <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/video-bg-2.jpg)" }}></div>
                      </div>
                      <div className="thumb-box">
                          <div className="thumb thumb-1 zoom-fade"><img src="/assets/images/resource/thumb-1.png" alt="" /></div>
                          <div className="thumb thumb-2 zoom-fade"><img src="/assets/images/resource/thumb-2.png" alt="" /></div>
                          <div className="thumb thumb-3 zoom-fade"><img src="/assets/images/resource/thumb-3.png" alt="" /></div>
                          <div className="thumb thumb-4 zoom-fade"><img src="/assets/images/resource/thumb-4.png" alt="" /></div>
                      </div>
                      <div className="auto-container">
                          <div className="content-box p_relative z_5 pb_120">
                              <h2>Our Laboratory conduct scientific research and <br />development in Energy & Technology.</h2>
                              <div className="btn-box">
                                  <a href="service.html" className="theme-btn btn-one mr_20">View Services<span></span><span></span><span></span><span></span></a>
                                  <a href="contact.html" className="theme-btn btn-one">Get in Touch<span></span><span></span><span></span><span></span></a>
                              </div>
                          </div>
                          <div className="video-content z_5">
                              <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-15.png)" }}></div>
                              <div className="video-inner" style={{ backgroundImage: "url(/assets/images/background/video-bg-3.jpg)" }}>
                                  <div className="video-btn">
                                      <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><i className="icon-24"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  {/* video-section end */}
    </>
  );
}
