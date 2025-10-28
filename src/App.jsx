import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Clients from "./Components/Clients/Clients";
import NotFound from "./Components/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Clients />
        <Gallery />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Blog />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <NotFound />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
