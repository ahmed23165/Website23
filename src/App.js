
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect} from 'react';
//import Aos from 'aos';
import './App.css'; // Create appropriate CSS for .section and .visible classes
//import Navbars from "./Component/Navbars/Navbars";
import Navbars2 from "./Component/Navbars2/Navbars2";
import Home0 from "./Component/Home0/Home0";
import About from "./Component/About/About";
import Pricing from "./Component/Pricing/Pricing";
import Frequently from "./Component/Frequently/Frequently";
import Test from "./Component/Test/Test";
import Gallery from "./Component/Gallery/Gallery";
import Blog1 from "./Component/Blog1/Blog1";
import Services from "./Component/Services/Services";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
const App = () => {
  

  return (
    <div>
      
      <Navbars2 />
      <Home0 />
      <About />
      <Pricing />
      <Frequently />
      <Test />
      <Gallery />
      <Blog1 />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
