export default function HomeWorking() {
  return (
    <>
          {/* working-section */}
          <section className="working-section centred pt_120 pb_80">
            <div className="bg-layer parallax-bg" data-parallax={"{\"y\": 100}"} style={{ backgroundImage: "url(/assets/images/background/working-bg.jpg)" }}></div>
            <div className="auto-container">
              <div className="sec-title light mb_60 sec-title-animation animation-style2">
                <span className="sub-title mb_20 title-animation">Working Process</span>
                <h2 className="title-animation">Our Working Process</h2>
              </div>
              <div className="inner-container p_relative">
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                      <div className="inner-box">
                        <div className="count-box">
                          <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.png)" }}></div>
                          <span>1</span>
                        </div>
                        <h3>Client Briefs Project</h3>
                        <p>The more details you can provide, the better lab can assist you</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                      <div className="inner-box">
                        <div className="count-box">
                          <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.png)" }}></div>
                          <span>2</span>
                        </div>
                        <h3>Lab Generates Proposal</h3>
                        <p>Provide information on how the client can proceed with the proposal</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                      <div className="inner-box">
                        <div className="count-box">
                          <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.png)" }}></div>
                          <span>3</span>
                        </div>
                        <h3>Lab Start Testing</h3>
                        <p>Specify the criteria for success and the key performance indicators</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                    <div className="working-block-one">
                      <div className="inner-box">
                        <div className="count-box">
                          <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.png)" }}></div>
                          <span>4</span>
                        </div>
                        <h3>Reports Delivered</h3>
                        <p>Our team is available for a follow-up meeting to discuss the contents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* working-section end */}
    </>
  );
}
