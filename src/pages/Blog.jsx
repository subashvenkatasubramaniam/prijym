import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function Blog() {
  return (
    <Layout title="Blog || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Blog" />

          {/* news-section */}
          <section className="news-section pt_120 pb_180">
              <div className="auto-container">
                  <div className="row clearfix">
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/news/news-1.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>24<span>Jun</span></h2>
                                      </div>
                                      <span className="category">Research</span>
                                      <h3><Link to="/blog-details">Testing giant invests millions in Conncected</Link></h3>
                                      <p>The Information technology and software in development Problems solutions.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/news/news-2.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>23<span>Jun</span></h2>
                                      </div>
                                      <span className="category">Physics</span>
                                      <h3><Link to="/blog-details">Slipping on ice may be down to too much</Link></h3>
                                      <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/news/news-3.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>22<span>Jun</span></h2>
                                      </div>
                                      <span className="category">Chemistry</span>
                                      <h3><Link to="/blog-details">Sustainability transformers win £100k in RSC</Link></h3>
                                      <p>The systematic investigation and experiment to develop new products, processes improve</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/news/news-4.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>21<span>Jun</span></h2>
                                      </div>
                                      <span className="category">Medical</span>
                                      <h3><Link to="/blog-details">Ensure Your Products Quality with a PRIJYM Lab</Link></h3>
                                      <p>The systematic investigation and experiment to develop new products, processes improve</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/news/news-5.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>20<span>Jun</span></h2>
                                      </div>
                                      <span className="category">Biology</span>
                                      <h3><Link to="/blog-details">All you Need to Know abouts this Liver Diseases</Link></h3>
                                      <p>The Information technology and software in development Problems solutions.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/news/news-6.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>19<span>Jun</span></h2>
                                      </div>
                                      <span className="category">AI SCIENCE</span>
                                      <h3><Link to="/blog-details">In the Pursuits of Quality a Laboratory Perspectives</Link></h3>
                                      <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/news/news-7.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>18<span>Jun</span></h2>
                                      </div>
                                      <span className="category">Scientific</span>
                                      <h3><Link to="/blog-details">Ensure Your Products Quality with a PRIJYM Labs</Link></h3>
                                      <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/news/news-8.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>17<span>Jun</span></h2>
                                      </div>
                                      <span className="category">Physics</span>
                                      <h3><Link to="/blog-details">Patient-Centered Hospital Labs Start Here</Link></h3>
                                      <p>The systematic investigation and experiment to develop new products, processes improve</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one">
                              <div className="inner-box">
                                  <figure className="image-box"><Link to="/events-details"><img src="/assets/images/news/news-9.jpg" alt="" /></Link></figure>
                                  <div className="lower-content">
                                      <div className="post-date">
                                          <h2>16<span>Jun</span></h2>
                                      </div>
                                      <span className="category">Chemistry</span>
                                      <h3><Link to="/blog-details">Blood Protein Signatures Change Across Lifespan</Link></h3>
                                      <p>The Information technology and software in development Problems solutions.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="pagination-wrapper pt_30 centred">
                      <ul className="pagination clearfix">
                          <li><Link to="/blog" className="current">1</Link></li>
                          <li><Link to="/blog">2</Link></li>
                          <li><Link to="/blog">3</Link></li>
                          <li><span>...</span></li>
                          <li><Link to="/blog">8</Link></li>
                          <li><Link to="/blog"><i className="icon-36"></i></Link></li>
                      </ul>
                  </div>
              </div>
          </section>
          {/* news-section end */}

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
