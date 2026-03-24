import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import EquipmentSection from "@/components/EquipmentSection";

const Equipamentos = () => {
  return (
    <Layout>
      <PageBanner
        title={<>Locação de <span className="text-gradient">Equipamentos</span></>}
        subtitle="Frota própria e moderna disponível para locação."
      />
      <EquipmentSection />
    </Layout>
  );
};

export default Equipamentos;
