import { Link } from 'react-router-dom';
import XIcon from '../layout/XIcon';

export default function HomeTeam() {
  return (
    <>
          {/* team-section */}
          <section className="team-section pt_120 pb_90 centred">
            <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/background/team-bg.png)" }}></div>
            <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-10.png)" }}></div>
            <div className="auto-container">
              <div className="sec-title mb_70 sec-title-animation animation-style2">
                <span className="sub-title mb_20 title-animation">Team Members</span>
                <h2 className="title-animation">Our Expert Scientists</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image"><img src="/assets/images/team/team-1.jpg" alt="" /></figure>
                        <ul className="social-links">
                          <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                          <li><Link to="/"><XIcon size={14} /></Link></li>
                          <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                        </ul>
                      </div>
                      <div className="lower-content">
                        <h3><Link to="/team-details">Ronald Richards</Link></h3>
                        <span className="designation">Scientist</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image"><img src="/assets/images/team/team-2.jpg" alt="" /></figure>
                        <ul className="social-links">
                          <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                          <li><Link to="/"><XIcon size={14} /></Link></li>
                          <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                        </ul>
                      </div>
                      <div className="lower-content">
                        <h3><Link to="/team-details">Theresa Webb</Link></h3>
                        <span className="designation">Physician</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image"><img src="/assets/images/team/team-3.jpg" alt="" /></figure>
                        <ul className="social-links">
                          <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                          <li><Link to="/"><XIcon size={14} /></Link></li>
                          <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                        </ul>
                      </div>
                      <div className="lower-content">
                        <h3><Link to="/team-details">Brooklyn Simmons</Link></h3>
                        <span className="designation">Chemist</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image"><img src="/assets/images/team/team-4.jpg" alt="" /></figure>
                        <ul className="social-links">
                          <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                          <li><Link to="/"><XIcon size={14} /></Link></li>
                          <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                        </ul>
                      </div>
                      <div className="lower-content">
                        <h3><Link to="/team-details">Leslie Alexander</Link></h3>
                        <span className="designation">DNA Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-section end */}
    </>
  );
}
