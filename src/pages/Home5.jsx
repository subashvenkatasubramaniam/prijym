import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header5 from '../components/layout/Header5';
import Home5About from '../components/home5/About';
import Home5Banner from '../components/home5/Banner';
import Home5Clients from '../components/home5/Clients';
import Home5Cta from '../components/home5/Cta';
import Home5Events from '../components/home5/Events';
import Home5Feature from '../components/home5/Feature';
import Home5Funfact from '../components/home5/Funfact';
import Home5News from '../components/home5/News';
import Home5Services from '../components/home5/Services';
import Home5Team from '../components/home5/Team';
import Home5Testimonial from '../components/home5/Testimonial';
import Home5Working from '../components/home5/Working';

export default function Home5() {
  return (
    <Layout title="Home Five || PRIJYM">
      <Header5 />
      <main className="main-content alternat-2">
      <Home5Banner />
      <Home5Feature />
      <Home5About />
      <Home5Funfact />
      <Home5Services />
      <Home5Working />
      <Home5Clients />
      <Home5Events />
      <Home5Team />
      <Home5Testimonial />
      <Home5News />
      <Home5Cta />
      </main>
      <Footer />
    </Layout>
  );
}
