import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function Gallery() {
  return (
    <Layout title="Gallery || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Gallery" />

          {/* gallery-section */}
          <section className="gallery-section">
              <div className="auto-container">
                  <div className="sec-title centred mb_70 sec-title-animation animation-style2">
                      <span className="sub-title mb_20 title-animation">Gallery</span>
                      <h2 className="title-animation">View Our Gallery</h2>
                  </div>
                  <div className="sortable-masonry">
                      <div className="filters centred mb_50">
                          <ul className="filter-tabs filter-btns clearfix">
                              <li className="active filter" data-role="button" data-filter=".all">All</li>
                              <li className="filter" data-role="button" data-filter=".science">Science</li>
                              <li className="filter" data-role="button" data-filter=".physics">Physics</li>
                              <li className="filter" data-role="button" data-filter=".chemistry">Chemistry</li>
                              <li className="filter" data-role="button" data-filter=".biology">Biology</li>
                              <li className="filter" data-role="button" data-filter=".tech">Bio Tech</li>
                          </ul>
                      </div>
                      <div className="items-container row clearfix">
                          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all chemistry science physics tech">
                              <div className="gallery-block-one">
                                  <div className="inner-box">
                                      <figure className="image-box"><img src="/assets/images/gallery/gallery-1.jpg" alt="" /></figure>
                                      <figure className="overlay-image"><img src="/assets/images/gallery/gallery-1.jpg" alt="" /></figure>
                                      <div className="view-btn"><a href="/assets/images/gallery/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-63"></i></a></div>
                                      <div className="text-box">
                                          <h3><Link to="/gallery">Chemical Research</Link></h3>
                                          <p>Laboratory</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all science chemistry material">
                              <div className="gallery-block-one">
                                  <div className="inner-box">
                                      <figure className="image-box"><img src="/assets/images/gallery/gallery-2.jpg" alt="" /></figure>
                                      <figure className="overlay-image"><img src="/assets/images/gallery/gallery-2.jpg" alt="" /></figure>
                                      <div className="view-btn"><a href="/assets/images/gallery/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-63"></i></a></div>
                                      <div className="text-box">
                                          <h3><Link to="/gallery">Chemical Research</Link></h3>
                                          <p>Laboratory</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all chemistry physics biology tech">
                              <div className="gallery-block-one">
                                  <div className="inner-box">
                                      <figure className="image-box"><img src="/assets/images/gallery/gallery-3.jpg" alt="" /></figure>
                                      <figure className="overlay-image"><img src="/assets/images/gallery/gallery-3.jpg" alt="" /></figure>
                                      <div className="view-btn"><a href="/assets/images/gallery/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-63"></i></a></div>
                                      <div className="text-box">
                                          <h3><Link to="/gallery">Chemical Research</Link></h3>
                                          <p>Laboratory</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all science physics chemistry tech">
                              <div className="gallery-block-one">
                                  <div className="inner-box">
                                      <figure className="image-box"><img src="/assets/images/gallery/gallery-4.jpg" alt="" /></figure>
                                      <figure className="overlay-image"><img src="/assets/images/gallery/gallery-4.jpg" alt="" /></figure>
                                      <div className="view-btn"><a href="/assets/images/gallery/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-63"></i></a></div>
                                      <div className="text-box">
                                          <h3><Link to="/gallery">Chemical Research</Link></h3>
                                          <p>Laboratory</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all chemistry physics biology">
                              <div className="gallery-block-one">
                                  <div className="inner-box">
                                      <figure className="image-box"><img src="/assets/images/gallery/gallery-5.jpg" alt="" /></figure>
                                      <figure className="overlay-image"><img src="/assets/images/gallery/gallery-5.jpg" alt="" /></figure>
                                      <div className="view-btn"><a href="/assets/images/gallery/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-63"></i></a></div>
                                      <div className="text-box">
                                          <h3><Link to="/gallery">Chemical Research</Link></h3>
                                          <p>Laboratory</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all science chemistry biology tech">
                              <div className="gallery-block-one">
                                  <div className="inner-box">
                                      <figure className="image-box"><img src="/assets/images/gallery/gallery-6.jpg" alt="" /></figure>
                                      <figure className="overlay-image"><img src="/assets/images/gallery/gallery-6.jpg" alt="" /></figure>
                                      <div className="view-btn"><a href="/assets/images/gallery/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-63"></i></a></div>
                                      <div className="text-box">
                                          <h3><Link to="/gallery">Chemical Research</Link></h3>
                                          <p>Laboratory</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all chemistry physics biology tech">
                              <div className="gallery-block-one">
                                  <div className="inner-box">
                                      <figure className="image-box"><img src="/assets/images/gallery/gallery-7.jpg" alt="" /></figure>
                                      <figure className="overlay-image"><img src="/assets/images/gallery/gallery-7.jpg" alt="" /></figure>
                                      <div className="view-btn"><a href="/assets/images/gallery/gallery-7.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-63"></i></a></div>
                                      <div className="text-box">
                                          <h3><Link to="/gallery">Chemical Research</Link></h3>
                                          <p>Laboratory</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all science physics chemistry tech">
                              <div className="gallery-block-one">
                                  <div className="inner-box">
                                      <figure className="image-box"><img src="/assets/images/gallery/gallery-8.jpg" alt="" /></figure>
                                      <figure className="overlay-image"><img src="/assets/images/gallery/gallery-8.jpg" alt="" /></figure>
                                      <div className="view-btn"><a href="/assets/images/gallery/gallery-8.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-63"></i></a></div>
                                      <div className="text-box">
                                          <h3><Link to="/gallery">Chemical Research</Link></h3>
                                          <p>Laboratory</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all chemistry physics biology">
                              <div className="gallery-block-one">
                                  <div className="inner-box">
                                      <figure className="image-box"><img src="/assets/images/gallery/gallery-9.jpg" alt="" /></figure>
                                      <figure className="overlay-image"><img src="/assets/images/gallery/gallery-9.jpg" alt="" /></figure>
                                      <div className="view-btn"><a href="/assets/images/gallery/gallery-9.jpg" className="lightbox-image" data-fancybox="gallery"><i className="icon-63"></i></a></div>
                                      <div className="text-box">
                                          <h3><Link to="/gallery">Chemical Research</Link></h3>
                                          <p>Laboratory</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="more-btn centred pt_50">
                      <Link to="/gallery" className="theme-btn btn-one">Load More<span></span><span></span><span></span><span></span></Link>
                  </div>
              </div>
          </section>
          {/* gallery-section end */}

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
