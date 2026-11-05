import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function EventsDetails() {
  return (
    <Layout title="Events Details || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Events Details" />

          {/* events-details */}
          <section className="events-details">
              <div className="auto-container">
                  <div className="row clearfix">
                      <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                          <div className="event-details-content">
                              <figure className="image-box mb_30"><img src="/assets/images/resource/events-11.jpg" alt="" /></figure>
                              <ul className="info-list mb_18 clearfix">
                                  <li><i className="icon-37"></i>20 Mar, 2023</li>
                                  <li><i className="icon-1"></i>10:00AM - 11:00AM</li>
                                  <li><i className="icon-39"></i>White Palace, New York</li>
                              </ul>
                              <h2>Amy Butler Receives AGU Ascent Award</h2>
                              <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in these realm of uncommon & extraordinary chemical phenomena. An magnanis aliqua.bands needs no occasion too be gifted and can be given as gifts whenever onewishes to. Eternity bands are also known as the wedding bandse. The circular loop of diamonds signifies eternal and morer unending love.</p>
                              <p>This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniries, childbirth or anything that makes a difference to their life.dolor sit and amet consectetur ander adipiscing elites eiusmod tempor incididunt labore et dolore magna aliqua. Bands needs no occasion too be gifted and can been given as gifts whenever onewishes to. Eternity bands are also known as the wedding bands. The circular looper of diamonds signifies eternal and unending love.</p>
                              <div className="two-column pt_30">
                                  <div className="row clearfix">
                                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                          <figure className="image-box mb_50"><img src="/assets/images/resource/events-12.jpg" alt="" /></figure>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                          <figure className="image-box mb_50"><img src="/assets/images/resource/events-13.jpg" alt="" /></figure>
                                      </div>
                                  </div>
                              </div>
                              <h3>Key Points Of This Session</h3>
                              <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in these realm of uncommon & extraordinary chemical phenomena. An magnanis aliqua.bands needs no occasion too be gifted and can be given as gifts whenever onewishes to. Eternity bands are also known as the wedding bandse. The circular loop of diamonds signifies eternal and morer unending love.</p>
                              <ul className="list-style-one pt_10 clearfix">
                                  <li>Improving all types of opportunities</li>
                                  <li>Quick solutions for daily problems</li>
                                  <li>Community that grows larger</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                          <div className="events-sidebar ml_20">
                              <h3 className="title-text">Speakers</h3>
                              <div className="speaker-box">
                                  <div className="single-speaker">
                                      <figure className="image-box"><img src="/assets/images/resource/speaker-1.jpg" alt="" /></figure>
                                      <div className="text-box">
                                          <h3>David Harbour</h3>
                                          <span className="designation">Doctor</span>
                                      </div>
                                  </div>
                                  <div className="single-speaker">
                                      <figure className="image-box"><img src="/assets/images/resource/speaker-2.jpg" alt="" /></figure>
                                      <div className="text-box">
                                          <h3>Dr. Sadie Sink</h3>
                                          <span className="designation">Doctor</span>
                                      </div>
                                  </div>
                                  <div className="single-speaker">
                                      <figure className="image-box"><img src="/assets/images/resource/speaker-3.jpg" alt="" /></figure>
                                      <div className="text-box">
                                          <h3>Dr. Maya Hawke</h3>
                                          <span className="designation">Doctor</span>
                                      </div>
                                  </div>
                                  <div className="single-speaker">
                                      <figure className="image-box"><img src="/assets/images/resource/speaker-4.jpg" alt="" /></figure>
                                      <div className="text-box">
                                          <h3>Nomad Harbour</h3>
                                          <span className="designation">Doctor</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* events-details end */}

          {/* cta-style-two */}
          <section className="cta-style-two">
              <div className="auto-container">
                  <div className="inner-container">
                      <div id="particles-js"></div>
                      <div className="content-box">
                          <h2>Expert scientists conducting <br />precise product testing</h2>
                          <div className="btn-box">
                              <Link to="/services" className="theme-btn btn-one mr_20">View Services<span></span><span></span><span></span><span></span></Link>
                              <Link to="/contact" className="theme-btn btn-one">Get in Touch<span></span><span></span><span></span><span></span></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* cta-style-two end */}
      </main>
      <Footer />
    </Layout>
  );
}
