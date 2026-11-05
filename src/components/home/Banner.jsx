export default function HomeBanner() {
  return (
    <>
      {/* banner-section */}
      <section className="banner-section p_relative">
          <div className="banner-carousel owl-theme owl-carousel owl-dots-none owl-nav-none">
              <div className="slide-item p_relative">
                  <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/banner/banner-1.jpg)" }}></div>
                  <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-1.png)" }}></div>
                  <div className="auto-container">
                      <div className="content-box p_relative d_block z_5">
                          <span className="sub-title">Laboratory</span>
                          <h2>Space Physics <span>Research Laboratory</span></h2>
                          <p>Committed to knowledge dissemination, our laboratory is dedicated to educate next generation space scientists.</p>
                          <div className="btn-box">
                              <a href="index.html" className="theme-btn">Get in Touch <span></span><span></span><span></span><span></span></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="slide-item p_relative">
                  <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/banner/banner-1.jpg)" }}></div>
                  <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-1.png)" }}></div>
                  <div className="auto-container">
                      <div className="content-box p_relative d_block z_5">
                          <span className="sub-title">Laboratory</span>
                          <h2>Space Physics <span>Research Laboratory</span></h2>
                          <p>Committed to knowledge dissemination, our laboratory is dedicated to educate next generation space scientists.</p>
                          <div className="btn-box">
                              <a href="index.html" className="theme-btn">Get in Touch <span></span><span></span><span></span><span></span></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="slide-item p_relative">
                  <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/banner/banner-1.jpg)" }}></div>
                  <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-1.png)" }}></div>
                  <div className="auto-container">
                      <div className="content-box p_relative d_block z_5">
                          <span className="sub-title">Laboratory</span>
                          <h2>Space Physics <span>Research Laboratory</span></h2>
                          <p>Committed to knowledge dissemination, our laboratory is dedicated to educate next generation space scientists.</p>
                          <div className="btn-box">
                              <a href="index.html" className="theme-btn">Get in Touch <span></span><span></span><span></span><span></span></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* banner-section end */}
    </>
  );
}
