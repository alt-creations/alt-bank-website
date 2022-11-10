
import './index.css';
import Billing from "./components/Billing";
import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="w-full border-b shadow-sm">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <Navbar />
      </div>
    </div>
      </div>
  

    <div className={`bg-white flex justify-center items-start`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <Intro />
      </div>
    </div>
    
    <div className={`bg-white sm:px-16 px-6 flex justify-center items-center`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <Statistics />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <CTA />
      </div>
    </div>
    <div className={`bg-white border-t border-gray-300 w-full`}>
      <div className="sm:px-16 px-6 xl:max-w-[1280px] w-full">
      <Footer />
      </div>
    </div>
    <div className={`bg-white border-t border-gray-300 w-full`}>
      <div className="sm:px-16 px-6 xl:max-w-[1280px] w-full">
      <div className="w-full flex justify-between items-center md:flex-row flex-col py-2">
      <p className="font-poppins font-normal text-center text-[12px] leading-[27px] ">
        Copyright Ⓒ 2022 AltCreations. All Rights Reserved.
      </p>

    </div>
      </div>
    </div>
  </div>
  );
}

export default App;
