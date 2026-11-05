import { Link } from 'react-router-dom';

export default function HomeEvents() {
  return (
    <>
          {/* events-section */}
          <section className="events-section pt_120">
            <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/events-bg.jpg)" }}></div>
            <div className="auto-container">
              <div className="sec-title mb_70 centred sec-title-animation animation-style2">
                <span className="sub-title mb_20 title-animation">Events</span>
                <h2 className="title-animation">Upcoming Events</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                  <div className="events-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-1.jpg" alt="" /></Link></figure>
                      <div className="lower-content">
                        <div className="post-date">
                          <h2>24<span>Jun</span></h2>
                        </div>
                        <span className="location-box"><i className="icon-18"></i>United State</span>
                        <h3><Link to="/events-details">Freshly Cosmetics Payments Makeover</Link></h3>
                        <p>The Information technology and software in development Problems solutions.</p>
                        <div className="speakers-box">
                          <ul className="speakers-list">
                            <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                            <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                            <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                          </ul>
                          <div className="text">
                            <h6>10+</h6>
                            <span>Speakers</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                  <div className="events-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-2.jpg" alt="" /></Link></figure>
                      <div className="lower-content">
                        <div className="post-date">
                          <h2>12<span>Mar</span></h2>
                        </div>
                        <span className="location-box"><i className="icon-18"></i>United State</span>
                        <h3><Link to="/events-details">Organic Chemistry Research Laboratory</Link></h3>
                        <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                        <div className="speakers-box">
                          <ul className="speakers-list">
                            <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                            <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                            <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                          </ul>
                          <div className="text">
                            <h6>10+</h6>
                            <span>Speakers</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 events-block">
                  <div className="events-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <figure className="image-box"><Link to="/events-details"><img src="/assets/images/resource/events-3.jpg" alt="" /></Link></figure>
                      <div className="lower-content">
                        <div className="post-date">
                          <h2>16<span>Feb</span></h2>
                        </div>
                        <span className="location-box"><i className="icon-18"></i>United State</span>
                        <h3><Link to="/events-details">The research team is filled with multidisciplinary</Link></h3>
                        <p>The systematic investigation and experiment to develop new products, processes improve</p>
                        <div className="speakers-box">
                          <ul className="speakers-list">
                            <li><img src="/assets/images/resource/speakers-1.png" alt="" /></li>
                            <li><img src="/assets/images/resource/speakers-2.png" alt="" /></li>
                            <li><img src="/assets/images/resource/speakers-3.png" alt="" /></li>
                          </ul>
                          <div className="text">
                            <h6>10+</h6>
                            <span>Speakers</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="more-btn centred pt_30">
                <Link to="/" className="theme-btn btn-one">View All Events<span></span><span></span><span></span><span></span></Link>
              </div>
            </div>
          </section>
          {/* events-section end */}
    </>
  );
}
