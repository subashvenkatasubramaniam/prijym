import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function Blog3() {
  return (
    <Layout title="Blog || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Blog" />

          {/* sidebar-page-container */}
          <section className="sidebar-page-container p_relative pt_120 pb_180">
              <div className="auto-container">
                  <div className="row clearfix">
                      <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                          <div className="blog-grid-content">
                              <div className="news-block-two">
                                  <div className="inner-box">
                                      <figure className="image-box"><Link to="/blog-details"><img src="/assets/images/news/news-11.jpg" alt="" /></Link></figure>
                                      <div className="content-box">
                                          <span className="category">Research</span>
                                          <h3><Link to="/blog-details">Testing giant invests millions in Conncected</Link></h3>
                                          <ul className="post-info">
                                              <li className="author"><img src="/assets/images/news/author-1.png" alt="" />By <Link to="/blog-details">Alan Bell</Link></li>
                                              <li className="date"><i className="icon-37"></i>jan 09, 2024</li>
                                          </ul>
                                          <p>The Information technology and software in development Problems solutions.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="news-block-two">
                                  <div className="inner-box">
                                      <figure className="image-box"><Link to="/blog-details"><img src="/assets/images/news/news-12.jpg" alt="" /></Link></figure>
                                      <div className="content-box">
                                          <span className="category">Chemistry</span>
                                          <h3><Link to="/blog-details">Sustainability transformers win £100k in RSC</Link></h3>
                                          <ul className="post-info">
                                              <li className="author"><img src="/assets/images/news/author-2.png" alt="" />By <Link to="/blog-details">Tomas Jon</Link></li>
                                              <li className="date"><i className="icon-37"></i>jan 08, 2024</li>
                                          </ul>
                                          <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="news-block-two">
                                  <div className="inner-box">
                                      <figure className="image-box"><Link to="/blog-details"><img src="/assets/images/news/news-13.jpg" alt="" /></Link></figure>
                                      <div className="content-box">
                                          <span className="category">Medical</span>
                                          <h3><Link to="/blog-details">Ensure Your Products Quality with a Biogenix Lab</Link></h3>
                                          <ul className="post-info">
                                              <li className="author"><img src="/assets/images/news/author-3.png" alt="" />By <Link to="/blog-details">Monb Zok</Link></li>
                                              <li className="date"><i className="icon-37"></i>jan 07, 2024</li>
                                          </ul>
                                          <p>The systematic investigation and experiment to develop new products, processes improve</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="news-block-two">
                                  <div className="inner-box">
                                      <figure className="image-box"><Link to="/blog-details"><img src="/assets/images/news/news-14.jpg" alt="" /></Link></figure>
                                      <div className="content-box">
                                          <span className="category">Physics</span>
                                          <h3><Link to="/blog-details">Slipping on ice may be down to too much</Link></h3>
                                          <ul className="post-info">
                                              <li className="author"><img src="/assets/images/news/author-4.png" alt="" />By <Link to="/blog-details">Jisan Tom</Link></li>
                                              <li className="date"><i className="icon-37"></i>jan 06, 2024</li>
                                          </ul>
                                          <p>Laboratory service dedication maintaining the highest standards of safety practise</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="news-block-two">
                                  <div className="inner-box">
                                      <figure className="image-box"><Link to="/blog-details"><img src="/assets/images/news/news-15.jpg" alt="" /></Link></figure>
                                      <div className="content-box">
                                          <span className="category">Biology</span>
                                          <h3><Link to="/blog-details">All you Need to Know abouts this Liver Diseases</Link></h3>
                                          <ul className="post-info">
                                              <li className="author"><img src="/assets/images/news/author-5.png" alt="" />By <Link to="/blog-details">Lag Gulti</Link></li>
                                              <li className="date"><i className="icon-37"></i>jan 05, 2024</li>
                                          </ul>
                                          <p>The Information technology and software in development Problems solutions.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="news-block-two">
                                  <div className="inner-box">
                                      <figure className="image-box"><Link to="/blog-details"><img src="/assets/images/news/news-16.jpg" alt="" /></Link></figure>
                                      <div className="content-box">
                                          <span className="category">AI SCIENCE</span>
                                          <h3><Link to="/blog-details">In the Pursuits of Quality a Laboratory Perspectives</Link></h3>
                                          <ul className="post-info">
                                              <li className="author"><img src="/assets/images/news/author-6.png" alt="" />By <Link to="/blog-details">Vosla Asa</Link></li>
                                              <li className="date"><i className="icon-37"></i>jan 04, 2024</li>
                                          </ul>
                                          <p>Managing interactions customers throughout the entire customer lifecycle of the deal.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="news-block-two">
                                  <div className="inner-box">
                                      <figure className="image-box"><Link to="/blog-details"><img src="/assets/images/news/news-17.jpg" alt="" /></Link></figure>
                                      <div className="content-box">
                                          <span className="category">Scientific</span>
                                          <h3><Link to="/blog-details">Ensure Your Products Quality with a Biogenix Labs</Link></h3>
                                          <ul className="post-info">
                                              <li className="author"><img src="/assets/images/news/author-7.png" alt="" />By <Link to="/blog-details">Ema Wast</Link></li>
                                              <li className="date"><i className="icon-37"></i>jan 03, 2024</li>
                                          </ul>
                                          <p>The systematic investigation and experiment to develop new products, processes improve</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="pagination-wrapper pt_30">
                                  <ul className="pagination clearfix">
                                      <li><Link to="/blog-2" className="current">1</Link></li>
                                      <li><Link to="/blog-2">2</Link></li>
                                      <li><Link to="/blog-2">3</Link></li>
                                      <li><span>...</span></li>
                                      <li><Link to="/blog-2">8</Link></li>
                                      <li><Link to="/blog-2"><i className="icon-36"></i></Link></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                          <div className="blog-sidebar ml_20">
                              <div className="sidebar-widget search-widget mb_50">
                                  <div className="widget-title mb_20">
                                      <h3>Search</h3>
                                  </div>
                                  <div className="search-form">
                                      <form onSubmit={(e) => e.preventDefault()}>
                                          <div className="form-group">
                                              <input type="search" name="search-field" placeholder="Search blog" required />
                                              <button type="submit"><i className="icon-2"></i></button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                              <div className="sidebar-widget category-widget mb_50">
                                  <div className="widget-title mb_12">
                                      <h3>Categories</h3>
                                  </div>
                                  <div className="widget-content">
                                      <ul className="category-list clearfix">
                                          <li><Link to="/blog-details">Genetics<span>(6)</span></Link></li>
                                          <li><Link to="/blog-details">Neuroscience<span>(8)</span></Link></li>
                                          <li><Link to="/blog-details">Nutrition<span>(4)</span></Link></li>
                                          <li><Link to="/blog-details">Resources<span>(2)</span></Link></li>
                                          <li><Link to="/blog-details">Research<span>(3)</span></Link></li>
                                          <li><Link to="/blog-details">Physics<span>(3)</span></Link></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="sidebar-widget post-widget mb_30">
                                  <div className="widget-title mb_17">
                                      <h3>Latest Post</h3>
                                  </div>
                                  <div className="post-inner">
                                      <div className="post">
                                          <figure className="post-thumb"><Link to="/blog-details"><img src="/assets/images/news/post-1.jpg" alt="" /></Link></figure>
                                          <h4><Link to="/blog-details">Blood Signatures Change Across</Link></h4>
                                          <span className="post-date"><i className="icon-37"></i>jan 06, 2024</span>
                                      </div>
                                      <div className="post">
                                          <figure className="post-thumb"><Link to="/blog-details"><img src="/assets/images/news/post-2.jpg" alt="" /></Link></figure>
                                          <h4><Link to="/blog-details">Microbiologics Introduces</Link></h4>
                                          <span className="post-date"><i className="icon-37"></i>jan 05, 2024</span>
                                      </div>
                                      <div className="post">
                                          <figure className="post-thumb"><Link to="/blog-details"><img src="/assets/images/news/post-3.jpg" alt="" /></Link></figure>
                                          <h4><Link to="/blog-details">Slipping on ice may be down to too much</Link></h4>
                                          <span className="post-date"><i className="icon-37"></i>jan 04, 2024</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="sidebar-widget tags-widget mb_40">
                                  <div className="widget-title mb_20">
                                      <h3>Tags</h3>
                                  </div>
                                  <div className="widget-content">
                                      <ul className="tags-list clearfix">
                                          <li><Link to="/blog-details">Research</Link></li>
                                          <li><Link to="/blog-details">Al Science</Link></li>
                                          <li><Link to="/blog-details">Biochemical</Link></li>
                                          <li><Link to="/blog-details">Chemistry</Link></li>
                                          <li><Link to="/blog-details">Physics</Link></li>
                                          <li><Link to="/blog-details">Bio Weapon</Link></li>
                                          <li><Link to="/blog-details">Science</Link></li>
                                          <li><Link to="/blog-details">Virus</Link></li>
                                          <li><Link to="/blog-details">Covid 19</Link></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="sidebar-widget newsletter-widget mb_50">
                                  <div className="widget-title mb_20">
                                      <h3>Newsletter</h3>
                                  </div>
                                  <div className="form-inner">
                                      <form onSubmit={(e) => e.preventDefault()}>
                                          <div className="form-group">
                                              <div className="icon"><i className="icon-65"></i></div>
                                              <input type="text" name="name" placeholder="Your Name*" required />
                                          </div>
                                          <div className="form-group">
                                              <div className="icon"><i className="icon-66"></i></div>
                                              <input type="email" name="email" placeholder="Email Address*" required />
                                          </div>
                                          <div className="form-group message-btn">
                                              <button type="submit" className="theme-btn btn-one">Subscribe Now<span></span><span></span><span></span><span></span></button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                              <div className="sidebar-widget gallery-widget">
                                  <div className="widget-title mb_20">
                                      <h3>Gallery</h3>
                                  </div>
                                  <div className="widget-content">
                                      <ul className="image-list clearfix">
                                          <li>
                                              <figure className="image"><a href="/assets/images/news/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/news/gallery-1.jpg" alt="" /></a></figure>
                                          </li>
                                          <li>
                                              <figure className="image"><a href="/assets/images/news/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/news/gallery-2.jpg" alt="" /></a></figure>
                                          </li>
                                          <li>
                                              <figure className="image"><a href="/assets/images/news/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/news/gallery-3.jpg" alt="" /></a></figure>
                                          </li>
                                          <li>
                                              <figure className="image"><a href="/assets/images/news/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/news/gallery-4.jpg" alt="" /></a></figure>
                                          </li>
                                          <li>
                                              <figure className="image"><a href="/assets/images/news/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/news/gallery-5.jpg" alt="" /></a></figure>
                                          </li>
                                          <li>
                                              <figure className="image"><a href="/assets/images/news/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/news/gallery-6.jpg" alt="" /></a></figure>
                                          </li>
                                          <li>
                                              <figure className="image"><a href="/assets/images/news/gallery-7.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/news/gallery-7.jpg" alt="" /></a></figure>
                                          </li>
                                          <li>
                                              <figure className="image"><a href="/assets/images/news/gallery-8.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/news/gallery-8.jpg" alt="" /></a></figure>
                                          </li>
                                          <li>
                                              <figure className="image"><a href="/assets/images/news/gallery-9.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/news/gallery-9.jpg" alt="" /></a></figure>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* sidebar-page-container end */}

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
