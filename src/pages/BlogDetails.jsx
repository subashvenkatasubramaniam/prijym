import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';
import XIcon from '../components/layout/XIcon';

export default function BlogDetails() {
  return (
    <Layout title="Blog Details || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Blog Details" />

          {/* sidebar-page-container */}
          <section className="sidebar-page-container p_relative pt_120 pb_180">
              <div className="auto-container">
                  <div className="row clearfix">
                      <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                          <div className="blog-details-content">
                              <div className="upper-image mb_30 p_relative">
                                  <figure className="image"><img src="/assets/images/news/news-18.jpg" alt="" /></figure>
                                  <div className="post-date">
                                      <h2>23<span>Jun</span></h2>
                                  </div>
                              </div>
                              <ul className="post-info">
                                  <li><span>Research</span></li>
                                  <li className="author"><img src="/assets/images/news/author-8.png" alt="" />By Alan Bell</li>
                              </ul>
                              <h2>Ensure Your Products Quality with a PRIJYM Laboratory</h2>
                              <div className="text-box mb_55">
                                  <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in these realm of uncommon & extraordinary chemical phenomena. An magnanis aliqua.bands needs no occasion too be gifted and can be given as gifts whenever onewishes to Nunc Efficitur Mollis Nunc, Ac Facilisis Orci Viverra Vel. Commodo A Lorem.</p>
                                  <p>This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniries, childbirth or anything that makes a difference to their life.dolor sit and amet consectetur ander adipiscing elites eiusmod tempor incididunt labore et dolore magna aliqua. Bands needs no occasion too be gifted and can been given as gifts whenever onewishes to. Eternity bands are also known as the wedding bands. The circular looper of diamonds signifies eternal and unending love.</p>
                              </div>
                              <blockquote>
                                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit amet purus tempor dui pharet consequat nibh elit urna interdum viera quam and arcu duis”</p>
                                  <div className="author-box">
                                      <figure className="image"><img src="/assets/images/news/author-9.png" alt="" /></figure>
                                      <h3>Finn Wolfhard</h3>
                                      <span className="designation">Doctor</span>
                                  </div>
                              </blockquote>
                              <div className="text-box mb_55">
                                  <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in these realm of uncommon & extraordinary chemical phenomena. An magnanis aliqua.bands needs no occasion too be gifted and can be given as gifts whenever onewishes to Nunc Efficitur Mollis Nunc, Ac Facilisis Orci Viverra Vel. Commodo A Lorem.</p>
                              </div>
                              <div className="video-inner centred" style={{ backgroundImage: "url(/assets/images/news/news-19.jpg)" }}>
                                  <div className="video-btn">
                                      <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><i className="icon-24"></i></a>
                                  </div>
                              </div>
                              <div className="text-box pt_25 mb_55">
                                  <h3>I was doing a course on Greek & Roman Literature</h3>
                                  <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in these realm of uncommon & extraordinary chemical phenomena. An magnanis aliqua.bands needs no occasion too be gifted and can be given as gifts whenever onewishes to Nunc Efficitur Mollis Nunc, Ac Facilisis Orci Viverra Vel. Commodo A Lorem.</p>
                                  <p>This sentiment is what makes the eternity band a perfect gift for couples on special occasions, such as anniries, childbirth or anything that makes a difference to their life.dolor sit and amet consectetur ander adipiscing elites eiusmod tempor incididunt labore et dolore magna aliqua. Bands needs no occasion too be gifted and can been given as gifts whenever onewishes to. Eternity bands are also known as the wedding bands. The circular looper of diamonds signifies eternal and unending love.</p>
                              </div>
                              <div className="post-share-option mb_50">
                                  <ul className="post-tags">
                                      <li>
                                          <h5>Tags:</h5>
                                      </li>
                                      <li><Link to="/blog-details">Research</Link></li>
                                      <li><Link to="/blog-details">Al Science</Link></li>
                                      <li><Link to="/blog-details">Biochemical</Link></li>
                                  </ul>
                                  <ul className="social-links">
                                      <li>
                                          <h5>Share This :</h5>
                                      </li>
                                      <li><Link to="/blog-details"><i className="fab fa-facebook-f"></i></Link></li>
                                      <li><Link to="/blog-details"><i className="fab fa-pinterest-p"></i></Link></li>
                                      <li><Link to="/blog-details"><XIcon size={14} /></Link></li>
                                  </ul>
                              </div>
                              <div className="author-box mb_40">
                                  <figure className="image-box"><img src="/assets/images/news/author-10.png" alt="" /></figure>
                                  <h3>Sandra Bullock</h3>
                                  <span className="designation">Science Reporter</span>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui pharetra consequat nibh elit urna interdum viera quam.</p>
                              </div>
                              <div className="comment-form-box">
                                  <h3>Leave A Comments</h3>
                                  <div className="form-inner">
                                      <form onSubmit={(e) => e.preventDefault()}>
                                          <div className="row clearfix">
                                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                  <input type="text" name="name" placeholder="Your name" required />
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                  <input type="email" name="email" placeholder="Your email" required />
                                              </div>
                                              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                  <textarea name="message" placeholder="Type message"></textarea>
                                              </div>
                                              <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                  <button type="submit" className="theme-btn btn-one">Post a Comment<span></span><span></span><span></span><span></span></button>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
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
