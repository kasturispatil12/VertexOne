import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import AboutSection from "../components/AboutSection";
import FeaturedComponents from "../components/FeaturedComponents";
import FAQ from "./FAQ";

function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <AboutSection />
      <FeaturedComponents />
      <FAQ />
    </>
  );
}

export default Home;