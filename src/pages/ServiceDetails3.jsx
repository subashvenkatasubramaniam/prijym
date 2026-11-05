import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function ServiceDetails3() {
  return (
    <Layout title="Service Details || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Service Details" />

      {/* service-details */}
      <section className="service-details">
          <div className="auto-container">
              <div className="row clearfix">
                  <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                      <div className="service-sidebar mr_20">
                          <div className="category-widget sidebar-widget mb_30">
                              <div className="widget-title mb_12">
                                  <h3>Our Services</h3>
                              </div>
                              <div className="widget-content">
                                  <ul className="category-list clearfix">
                                      <li><Link to="/service-details">Biochemistry Tests</Link></li>
                                      <li><Link to="/service-details-2">Microbiology Test</Link></li>
                                      <li><Link to="/service-details-3" className="current">Histopatology</Link></li>
                                      <li><Link to="/service-details-4">Hormonal Assay</Link></li>
                                      <li><Link to="/service-details-5">Clinical Pathology</Link></li>
                                      <li><Link to="/service-details-6">Cytopatholgy</Link></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="download-widget sidebar-widget mb_30">
                              <div className="widget-title mb_20">
                                  <h3>Download</h3>
                              </div>
                              <div className="widget-content">
                                  <ul className="download-list clearfix">
                                      <li>
                                          <button type="button">
                                              <i className="icon-44"></i>
                                              <span className="icon-45"></span>
                                              Our brochures
                                          </button>
                                      </li>
                                      <li>
                                          <button type="button">
                                              <i className="icon-44"></i>
                                              <span className="icon-45"></span>
                                              Company Details
                                          </button>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="support-widget">
                              <div className="inner-box">
                                  <figure className="image"><img src="/assets/images/resource/sidebar-1.png" alt="" /></figure>
                                  <h2>You Need Appointment for Service</h2>
                                  <p>Amet minim mollit non deserunt est sit aliqua la doremin</p>
                                  <div className="support-box">
                                      <div className="icon-box"><i className="icon-56"></i></div>
                                      <h3><a href="tel:7045552130127">(704) 555-213-0127</a></h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                      <div className="service-details-content">
                          <div className="content-one mb_65">
                              <div className="text-box mb_35">
                                  <h2>Histopatology</h2>
                                  <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in these realm of uncommon & extraordinary chemical phenomena. An magnanis aliqua.bands needs no occasion too be gifted and can be given as gifts whenever onewishes to.</p>
                              </div>
                              <figure className="image-box mb_35"><img src="/assets/images/service/service-10.jpg" alt="" /></figure>
                              <div className="text-box">
                                  <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in these realm of uncommon & extraordinary chemical phenomena. An magnanis aliqua.bands needs no occasion too be gifted and can be given as gifts whenever onewishes to.</p>
                                  <p>Nunc Efficitur Mollis Nunc, Ac Facilisis Orci Viverra Vel. Aliquam Rutrum Libero Sit Amet Justo Consectetur Luctus. Duis Dolor Augue, Euismod A Accumsan At, Commodo A Lorem.</p>
                              </div>
                          </div>
                          <div className="content-two mb_40">
                              <div className="text-box mb_50">
                                  <h3>Working Challenge</h3>
                                  <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in these realm of uncommon & extraordinary chemical phenomena. An magnanis aliqua.bands needs no occasion too be gifted and can be given as gifts whenever onewishes to.</p>
                                  <ul className="list-item clearfix">
                                      <li>Gathering and evaluating user requirements, in collaboration with product managers engineers.</li>
                                      <li>Illustrating design ideas using storyboards, process flows and sitemaps.</li>
                                      <li>Create user stories, personas, and storyboards & Determine information architecture an</li>
                                      <li>Create prototypes and wireframes & conduct usability testing.</li>
                                      <li>Find your area of interest. UX design is a broad discipline.</li>
                                      <li>General structure and writing style, action research design & case Study Design.</li>
                                  </ul>
                              </div>
                              <div className="two-column mb_80">
                                  <div className="row clearfix">
                                      <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                          <figure className="image-box"><img src="/assets/images/service/service-8.jpg" alt="" /></figure>
                                      </div>
                                      <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                          <div className="text-box">
                                              <p>Dicta sunt explicabo. Nemo ipsui enim ipsamo volupt quia voluptas sit aspernatur auton lorem ipsumo that Check our docs toots see if we've already answered question Lorem ipsum dolor sit, consectetur adipisci elit. Cursus massa elit rutrum.</p>
                                              <p>Erosie proin nibh neque interdum accumsan, nequeie vitae. Tortor etiam suspendisse faucibus volutpatire mattis tortor nec. Orc velit a, posuere turpis ametisti. Lectus lacus lectusio habitasse amet quam liberonoi, and lorem. Volutpat odio maecenas viverra loremone consequat condimentum diam</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="three-column centred">
                                  <div className="row clearfix">
                                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                          <div className="service-block-one">
                                              <div className="inner-box">
                                                  <div className="icon-box">
                                                      <div className="r-hex">
                                                          <div className="r-hex-inner"></div>
                                                      </div>
                                                      <div className="icon"><i className="icon-33"></i></div>
                                                  </div>
                                                  <h3>Blood Resources</h3>
                                                  <p>Effective potable water & waste management</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                          <div className="service-block-one">
                                              <div className="inner-box">
                                                  <div className="icon-box">
                                                      <div className="r-hex">
                                                          <div className="r-hex-inner"></div>
                                                      </div>
                                                      <div className="icon"><i className="icon-57"></i></div>
                                                  </div>
                                                  <h3>Medical Research</h3>
                                                  <p>For non-recyclable & non compostable waste</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                          <div className="service-block-one">
                                              <div className="inner-box">
                                                  <div className="icon-box">
                                                      <div className="r-hex">
                                                          <div className="r-hex-inner"></div>
                                                      </div>
                                                      <div className="icon"><i className="icon-62"></i></div>
                                                  </div>
                                                  <h3>Health Science</h3>
                                                  <p>Proper treatment of the different types waste</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="content-three mb_65">
                              <div className="text-box">
                                  <h3>The Outcomes</h3>
                                  <p>Welcome to the PRIJYM Rare Chemistry Research Documentation Center, a hub exploration & discovery in these realm of uncommon & extraordinary chemical phenomena. An magnanis aliqua.bands needs no occasion too be gifted and can be given as gifts whenever onewishes to.</p>
                                  <ul className="list-item clearfix">
                                      <li>Gathering and evaluating user requirements, in collaboration with product managers engineers.</li>
                                      <li>Illustrating design ideas using storyboards, process flows and sitemaps.</li>
                                      <li>Create user stories, personas, and storyboards &amp; Determine information architecture an</li>
                                      <li>Create prototypes and wireframes &amp; conduct usability testing.</li>
                                      <li>Find your area of interest. UX design is a broad discipline.</li>
                                      <li>General structure and writing style, action research design &amp; case Study Design.</li>
                                  </ul>
                              </div>
                          </div>
                          <div className="content-four p_relative">
                              <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-17.png)" }}></div>
                              <h3>Frequently Asked Questions</h3>
                              <ul className="accordion-box">
                                  <li className="accordion block">
                                      <div className="acc-btn">
                                          <h4><span>1.</span>What is Chemical Reaction in Acid?</h4>
                                      </div>
                                      <div className="acc-content">
                                          <div className="content">
                                              <p>Efficient waste collection systems are necessary to gather solid and liquid waste generated by the households, businesses, and industries. Well-organized collection services.</p>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="accordion block">
                                      <div className="acc-btn">
                                          <h4><span>2.</span>What is the alternative of fuel?</h4>
                                      </div>
                                      <div className="acc-content">
                                          <div className="content">
                                              <p>Efficient waste collection systems are necessary to gather solid and liquid waste generated by the households, businesses, and industries. Well-organized collection services.</p>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="accordion block active-block">
                                      <div className="acc-btn active">
                                          <h4><span>3.</span>How to collect sample from a dead horse?</h4>
                                      </div>
                                      <div className="acc-content current">
                                          <div className="content">
                                              <p>Efficient waste collection systems are necessary to gather solid and liquid waste generated by the households, businesses, and industries. Well-organized collection services.</p>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="accordion block">
                                      <div className="acc-btn">
                                          <h4><span>4.</span>Explaining what is Basic or Applied Research?</h4>
                                      </div>
                                      <div className="acc-content">
                                          <div className="content">
                                              <p>Efficient waste collection systems are necessary to gather solid and liquid waste generated by the households, businesses, and industries. Well-organized collection services.</p>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* service-details end */}

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
