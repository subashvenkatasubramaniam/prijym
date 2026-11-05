import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header3 from '../components/layout/Header3';
import Home3About from '../components/home3/About';
import Home3Banner from '../components/home3/Banner';
import Home3Cta from '../components/home3/Cta';
import Home3Feature from '../components/home3/Feature';
import Home3FeatureTwo from '../components/home3/FeatureTwo';
import Home3Funfact from '../components/home3/Funfact';
import Home3Journey from '../components/home3/Journey';
import Home3News from '../components/home3/News';
import Home3Service from '../components/home3/Service';
import Home3Testimonial from '../components/home3/Testimonial';
import Home3Working from '../components/home3/Working';

export default function Home3() {
  return (
    <Layout title="Home Three || PRIJYM">
      <Header3 />
      <main className="main-content alternat-2">
      <Home3Banner />
      <Home3Feature />
      <Home3About />
      <Home3FeatureTwo />
      <Home3Funfact />
      <Home3Service />
      <Home3Working />
      <Home3Journey />
      <Home3Testimonial />
      <Home3News />
      <Home3Cta />
      </main>
      <Footer />
    </Layout>
  );
}
