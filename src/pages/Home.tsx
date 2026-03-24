import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <CtaSection />
    </Layout>
  );
};

export default Home;
