import { Link } from 'react-router-dom';

export default function HomeClients() {
  return (
    <>
          {/* clients-section */}
          <section className="clients-section">
            <div className="outer-container">
              <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-1.png" alt="" /></Link></figure>
                <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-2.png" alt="" /></Link></figure>
                <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-3.png" alt="" /></Link></figure>
                <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-4.png" alt="" /></Link></figure>
                <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-5.png" alt="" /></Link></figure>
                <figure className="clients-logo"><Link to="/"><img src="/assets/images/clients/clients-6.png" alt="" /></Link></figure>
              </div>
            </div>
          </section>
          {/* clients-section end */}
    </>
  );
}
