import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header4 from '../components/layout/Header4';
import Home4About from '../components/home4/About';
import Home4Banner from '../components/home4/Banner';
import Home4Chooseus from '../components/home4/Chooseus';
import Home4Clients from '../components/home4/Clients';
import Home4Cta from '../components/home4/Cta';
import Home4Faq from '../components/home4/Faq';
import Home4Features from '../components/home4/Features';
import Home4News from '../components/home4/News';
import Home4Research from '../components/home4/Research';
import Home4Team from '../components/home4/Team';
import Home4Video from '../components/home4/Video';

export default function Home4() {
  return (
    <Layout title="Home Four || PRIJYM">
      <Header4 />
      <main className="main-content alternat-2">
      <Home4Banner />
      <Home4Chooseus />
      <Home4About />
      <Home4Features />
      <Home4Research />
      <Home4Faq />
      <Home4Clients />
      <Home4Video />
      <Home4Team />
      <Home4News />
      <Home4Cta />
      </main>
      <Footer />
    </Layout>
  );
}
