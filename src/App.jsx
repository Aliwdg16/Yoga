import Header from "./components/Header.jsx";

import Dontmiss from "./components/Dontmiss";
import Footer from "./components/Footer";
import Leonawoods from "./components/Leonawoods";

import OurStats from "./components/OurStats";
import BestInstructor from "./components/BestInstructor";
import NewExperience from "./components/NewExperience";
import AboutUsSection from "./components/AboutUsSection.jsx";
import PricingSection from "./components/PricingSection.jsx";

function App() {
  return (
    <>
      <Header />
      <OurStats />
      <AboutUsSection />
      <BestInstructor />
      <NewExperience />
      <PricingSection />
      <Leonawoods />
      <Dontmiss />
      <Footer />
    </>
  );
}

export default App;
