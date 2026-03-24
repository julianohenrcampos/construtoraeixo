import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import AboutSection from "@/components/AboutSection";
import WhyEixoSection from "@/components/WhyEixoSection";
import StatsSection from "@/components/StatsSection";

const AEmpresa = () => {
  return (
    <Layout>
      <PageBanner title={<span className="text-gradient">A Empresa</span>} />
      <AboutSection />
      <WhyEixoSection />
      <StatsSection />
    </Layout>
  );
};

export default AEmpresa;
