import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/layout/Preloader';
import About from './pages/About';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import BlogDetails from './pages/BlogDetails';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import EventsDetails from './pages/EventsDetails';
import Events from './pages/Events';
import Faq from './pages/Faq';
import Gallery from './pages/Gallery';
import HistoryPage from './pages/HistoryPage';
import Home2 from './pages/Home2';
import Home3 from './pages/Home';
import Home4 from './pages/Home';
import Home5 from './pages/Home';
import Home from './pages/Home';
import ResearchDetails from './pages/ResearchDetails';
import Research from './pages/Research';
import ServiceDetails2 from './pages/ServiceDetails2';
import ServiceDetails3 from './pages/ServiceDetails3';
import ServiceDetails4 from './pages/ServiceDetails4';
import ServiceDetails5 from './pages/ServiceDetails5';
import ServiceDetails6 from './pages/ServiceDetails6';
import ServiceDetails from './pages/ServiceDetails';
import Services from './pages/Services';
import Team2 from './pages/Team2';
import TeamDetails from './pages/TeamDetails';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog-2" element={<Blog2 />} />
        <Route path="/blog-3" element={<Blog3 />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/events-details" element={<EventsDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/index-2" element={<Home2 />} />
        <Route path="/index-3" element={<Home3 />} />
        <Route path="/index-4" element={<Home4 />} />
        <Route path="/index-5" element={<Home5 />} />
        <Route path="/" element={<Home />} />
        <Route path="/research-details" element={<ResearchDetails />} />
        <Route path="/research" element={<Research />} />
        <Route path="/service-details-2" element={<ServiceDetails2 />} />
        <Route path="/service-details-3" element={<ServiceDetails3 />} />
        <Route path="/service-details-4" element={<ServiceDetails4 />} />
        <Route path="/service-details-5" element={<ServiceDetails5 />} />
        <Route path="/service-details-6" element={<ServiceDetails6 />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team-2" element={<Team2 />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
