import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';

export default function Error() {
  return (
    <Layout title="404 || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="404" />

      {/* error-section */}
      <section className="error-section centred">
          <div className="auto-container">
              <div className="content-box">
                  <figure className="image-box"><img src="/assets/images/icons/error-1.png" alt="" /></figure>
                  <h1>404</h1>
                  <h2>Oops! That Page Can Not be Found.</h2>
                  <div className="btn-box">
                      <Link to="/error" className="theme-btn btn-one mr_20">Go Back<span></span><span></span><span></span><span></span></Link>
                      <Link to="/" className="theme-btn btn-one">Back to Home<span></span><span></span><span></span><span></span></Link>
                  </div>
              </div>
          </div>
      </section>
      {/* error-section end */}

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
