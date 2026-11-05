import { Link } from 'react-router-dom';

export default function HomeCtaSection() {
  return (
    <>
          {/* cta-section */}
          <section className="cta-section">
            <div className="auto-container">
              <div className="inner-container">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 cta-block">
                    <div className="cta-block-one">
                      <div className="inner-box">
                        <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/resource/cta-1.jpg)" }}></div>
                        <span className="text">Community</span>
                        <h2>Join The Community For Education</h2>
                        <Link to="/" className="theme-btn">Join the Club<span></span><span></span><span></span><span></span></Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 cta-block">
                    <div className="cta-block-one">
                      <div className="inner-box">
                        <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/resource/cta-2.jpg)" }}></div>
                        <span className="text">Best Service</span>
                        <h2>Looking for the best <br />Labatory Service</h2>
                        <Link to="/" className="theme-btn">Join the Club<span></span><span></span><span></span><span></span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* cta-section end */}
    </>
  );
}
