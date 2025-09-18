import { Toaster, toast } from 'react-hot-toast';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/services";
import Contact from "./Components/Contact/Contact";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <>
    <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;