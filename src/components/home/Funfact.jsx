export default function HomeFunfact() {
  return (
    <>
          {/* funfact-section */}
          <section className="funfact-section pt_130 pb_120 centred">
            <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/funfact-bg.jpg)" }}></div>
            <div className="pattern-layer">
              <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/shape-7.png)" }}></div>
            </div>
            <div className="auto-container">
              <div className="sec-title light mb_70 sec-title-animation animation-style2">
                <span className="sub-title mb_20 title-animation">Laboratory</span>
                <h2 className="title-animation">We Provide Reliable & High</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-8"></i></div>
                      <div className="count-outer count-box">
                        <span className="odometer" data-count="320">00</span><span>+</span>
                      </div>
                      <p>Hours Generated</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-9"></i></div>
                      <div className="count-outer count-box">
                        <span className="odometer" data-count="94">00</span><span>k+</span>
                      </div>
                      <p>Tasks Completed</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-10"></i></div>
                      <div className="count-outer count-box">
                        <span className="odometer" data-count="50">00</span><span>k+</span>
                      </div>
                      <p>Worldwide Users</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-11"></i></div>
                      <div className="count-outer count-box">
                        <span className="odometer" data-count="45">00</span><span>k+</span>
                      </div>
                      <p>Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* funfact-section end */}
    </>
  );
}
