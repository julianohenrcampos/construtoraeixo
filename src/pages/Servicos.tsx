import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SegmentsSection from "@/components/SegmentsSection";

const Servicos = () => {
  return (
    <Layout>
      <PageBanner
        title={<>Soluções completas em <span className="text-gradient">infraestrutura</span></>}
        subtitle="Áreas de atuação estratégica em infraestrutura."
      />
      <SegmentsSection />
    </Layout>
  );
};

export default Servicos;
