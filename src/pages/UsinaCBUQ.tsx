import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SegmentPageContent from "@/components/SegmentPageContent";
import cbuqSolutions from "@/assets/segments/cbuq_solutions.jpg?w=800&format=webp&quality=75";
import cbuqExecution from "@/assets/segments/cbuq_execution.jpg?w=800&format=webp&quality=75";
import cbuqEfficiency from "@/assets/segments/cbuq_efficiency.jpg?w=800&format=webp&quality=75";
import ctaEngineers from "@/assets/segments/cta_engineers.png?w=800&format=webp&quality=75";
import cbuqBg from "@/assets/segments/cbuq_bg.svg";

const UsinaCBUQ = () => (
  <Layout>
    <PageBanner
      title={<>Usina de <span className="text-gradient">CBUQ</span></>}
      subtitle="Produção de Concreto Betuminoso Usinado a Quente com controle de qualidade, dosagem Marshall e atendimento às normas DNIT/DER."
    />
    <SegmentPageContent
      backgroundImage={cbuqBg}
      institutionalParagraphs={[
        "A Construtora Eixo opera usinas de CBUQ (Concreto Betuminoso Usinado a Quente) com capacidade para atender obras de pavimentação de grande porte, garantindo qualidade, temperatura controlada e conformidade com as normas técnicas vigentes.",
        "Nossa usina é equipada com tecnologia moderna para dosagem precisa de agregados e ligantes asfálticos, assegurando a produção de misturas homogêneas e de alto desempenho. O controle de qualidade é realizado por laboratório próprio, com ensaios de dosagem Marshall e monitoramento contínuo de temperatura.",
      ]}
      solutions={{
        title: "Nossas Soluções",
        items: [
          "Produção de CBUQ para pavimentação rodoviária e urbana.",
          "Dosagem Marshall com controle laboratorial.",
          "Fornecimento de misturas asfálticas especiais.",
          "Atendimento às normas DNIT, DER e ABNT.",
          "Produção contínua com capacidade para grandes volumes.",
          "Controle de temperatura em todas as etapas.",
        ],
      }}
      solutionsImage={cbuqSolutions}
      differentials={{
        title: "Diferenciais da Usina de CBUQ",
        items: [
          "Usina com tecnologia de dosagem automatizada.",
          "Laboratório próprio para ensaios de qualidade.",
          "Controle rigoroso de temperatura e granulometria.",
          "Capacidade de produção para obras de grande porte.",
          "Conformidade total com especificações técnicas.",
          "Rastreabilidade de cada lote produzido.",
        ],
      }}
      differentialsImage={cbuqExecution}
      efficiency={{
        intro: "A usina de CBUQ da Eixo é projetada para máxima eficiência na produção de misturas asfálticas:",
        items: [
          "Produção verticalizada com agregados próprios.",
          "Redução de custos com logística integrada.",
          "Monitoramento contínuo de qualidade e temperatura.",
          "Agilidade no fornecimento para frentes de obra.",
        ],
        outro: "A integração entre a usina de CBUQ, a pedreira e o aterro de agregados permite à Eixo oferecer soluções completas de pavimentação com máxima eficiência, qualidade certificada e competitividade.",
      }}
      efficiencyImage={cbuqEfficiency}
      ctaImage={ctaEngineers}
    />
  </Layout>
);

export default UsinaCBUQ;
