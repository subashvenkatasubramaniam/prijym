import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header2 from '../components/layout/Header2';
import Home2About from '../components/home2/About';
import Home2Banner from '../components/home2/Banner';
import Home2Clients from '../components/home2/Clients';
import Home2Cta from '../components/home2/Cta';
import Home2Events from '../components/home2/Events';
import Home2Faq from '../components/home2/Faq';
import Home2Service from '../components/home2/Service';
import Home2Speciality from '../components/home2/Speciality';
import Home2Working from '../components/home2/Working';

export default function Home2() {
  return (
    <Layout title="Home Two || PRIJYM">
      <Header2 />
      <main className="main-content">
      <Home2Banner />
      <Home2Clients />
      <Home2About />
      <Home2Service />
      <Home2Speciality />
      <Home2Working />
      <Home2Events />
      <Home2Faq />
      <Home2Cta />
      </main>
      <Footer />
    </Layout>
  );
}
