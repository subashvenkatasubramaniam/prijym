import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import HomeAbout from '../components/home/About';
import HomeBanner from '../components/home/Banner';
import HomeClients from '../components/home/Clients';
import HomeCtaSection from '../components/home/CtaSection';
import HomeEvents from '../components/home/Events';
import HomeFeature from '../components/home/Feature';
import HomeFunfact from '../components/home/Funfact';
import HomeService from '../components/home/Service';
import HomeTeam from '../components/home/Team';
import HomeWorking from '../components/home/Working';

export default function Home() {
  return (
    <Layout title="Home || PRIJYM">
      <Header />
      {/* main-content */}
      <main className="main-content">
          <HomeBanner />
          <HomeFeature />
          <HomeAbout />
          <HomeFunfact />
          <HomeService />
          <HomeClients />
          <HomeWorking />
          <HomeEvents />
          <HomeCtaSection />
          <HomeTeam />
      </main>
      {/* main-content end */}
      <Footer />
    </Layout>
  );
}
