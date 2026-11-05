import { Link } from 'react-router-dom';

export default function HomeProject() {
  return (
    <>
      {/*Start Project Three*/}
      <section className="project-three">
                  <div className="container-fluid">
                      <div className="sec-title text-center">
                          <div className="sec-title__tagline">
                              <span className="left"></span>
                              <h6>LATEST PROJECT</h6> <span className="right"></span>
                          </div>
                          <h2 className="sec-title__title">Our latest completed and <br /> running projects.</h2>
                      </div>
                      <div className="row">
                          <div className="col-xl-12">
                              <div className="project-three__carousel owl-carousel owl-theme">
                                  {/*Start Project Three Single*/}
                                  <div className="project-three__single">
                                      <div className="project-three__single-img">
                                          <img src="/assets/images/update1.0/project-v3-img1.jpg" alt="#" />
                                          <div className="icon-box">
                                              <a className="img-popup" href="/assets/images/update1.0/project-v3-img1.jpg"><span className="icon-plus-sign"></span></a>
                                          </div>
                                          <div className="content-box">
                                              <p>construction</p>
                                              <h3><Link to="/">dowson construction</Link></h3>
                                          </div>
                                      </div>
                                  </div>
                                  {/*End Project Three Single*/}

                                  {/*Start Project Three Single*/}
                                  <div className="project-three__single">
                                      <div className="project-three__single-img">
                                          <img src="/assets/images/update1.0/project-v3-img2.jpg" alt="#" />
                                          <div className="icon-box">
                                              <a className="img-popup" href="/assets/images/update1.0/project-v3-img2.jpg"><span className="icon-plus-sign"></span></a>
                                          </div>
                                          <div className="content-box">
                                              <p>construction</p>
                                              <h3><Link to="/">dowson construction</Link></h3>
                                          </div>
                                      </div>
                                  </div>
                                  {/*End Project Three Single*/}

                                  {/*Start Project Three Single*/}
                                  <div className="project-three__single">
                                      <div className="project-three__single-img">
                                          <img src="/assets/images/update1.0/project-v3-img3.jpg" alt="#" />
                                          <div className="icon-box">
                                              <a className="img-popup" href="/assets/images/update1.0/project-v3-img3.jpg"><span className="icon-plus-sign"></span></a>
                                          </div>
                                          <div className="content-box">
                                              <p>construction</p>
                                              <h3><Link to="/">dowson construction</Link></h3>
                                          </div>
                                      </div>
                                  </div>
                                  {/*End Project Three Single*/}

                                  {/*Start Project Three Single*/}
                                  <div className="project-three__single">
                                      <div className="project-three__single-img">
                                          <img src="/assets/images/update1.0/project-v3-img4.jpg" alt="#" />
                                          <div className="icon-box">
                                              <a className="img-popup" href="/assets/images/update1.0/project-v3-img4.jpg"><span className="icon-plus-sign"></span></a>
                                          </div>
                                          <div className="content-box">
                                              <p>construction</p>
                                              <h3><Link to="/">dowson construction</Link></h3>
                                          </div>
                                      </div>
                                  </div>
                                  {/*End Project Three Single*/}
                              </div>
                          </div>

                          <div className="col-xl-12">
                              <div className="project-three-more-project-btn text-center">
                                  <div className="btn-box">
                                      <Link to="/" className="thm-btn" data-text="View All Portfolio +">
                                          View All project +
                                      </Link>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </section>
              {/*End Project Three*/}
    </>
  );
}
