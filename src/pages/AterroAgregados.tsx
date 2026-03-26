import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SegmentPageContent from "@/components/SegmentPageContent";
import aterroSolutions from "@/assets/segments/aterro_solutions.jpg?w=800&format=webp&quality=75";
import aterroExecution from "@/assets/segments/aterro_execution.jpg?w=800&format=webp&quality=75";
import aterroEfficiency from "@/assets/segments/aterro_efficiency.jpg?w=800&format=webp&quality=75";
import ctaEngineers from "@/assets/segments/cta_engineers.png?w=800&format=webp&quality=75";
import aterroBg from "@/assets/segments/aterro_bg_opt.jpg?w=1920&format=webp&quality=75";

const AterroAgregados = () => (
  <Layout>
    <PageBanner
      title={<>Aterro de <span className="text-gradient">Agregados</span></>}
      subtitle="Produção, estocagem e fornecimento de agregados minerais com controle de qualidade e logística integrada."
    />
    <SegmentPageContent
      backgroundImage={aterroBg}
      institutionalParagraphs={[
        "A Construtora Eixo opera unidades de aterro de agregados com capacidade para atender grandes obras de infraestrutura, garantindo fornecimento contínuo de materiais com qualidade certificada.",
        "Com estrutura própria de produção e estocagem, atuamos na extração, beneficiamento e distribuição de agregados minerais como areia, cascalho, brita e pó de pedra. Nosso compromisso é assegurar rastreabilidade, conformidade técnica e eficiência logística em toda a cadeia de fornecimento.",
      ]}
      solutions={{
        title: "Nossas Soluções",
        items: [
          "Produção e fornecimento de agregados minerais.",
          "Estocagem e controle de inventário de materiais.",
          "Beneficiamento e classificação granulométrica.",
          "Logística integrada de transporte e distribuição.",
          "Controle de qualidade com laboratório próprio.",
          "Atendimento a normas técnicas ABNT e DNIT.",
        ],
      }}
      solutionsImage={aterroSolutions}
      differentials={{
        title: "Diferenciais do Aterro de Agregados",
        items: [
          "Capacidade de produção em larga escala.",
          "Controle tecnológico rigoroso dos materiais.",
          "Rastreabilidade completa da cadeia produtiva.",
          "Frota própria para transporte e distribuição.",
          "Redução de custos logísticos por proximidade das obras.",
          "Gestão ambiental responsável e licenciamento adequado.",
        ],
      }}
      differentialsImage={aterroExecution}
      efficiency={{
        intro: "A estrutura de aterro de agregados da Eixo garante autonomia operacional e vantagem competitiva:",
        items: [
          "Produção própria de insumos para obras.",
          "Laboratório de controle tecnológico integrado.",
          "Otimização da cadeia de suprimentos.",
          "Redução de prazos e custos operacionais.",
        ],
        outro: "A verticalização da produção de agregados permite maior controle sobre a qualidade e os custos, resultando em obras mais eficientes e econômicas.",
      }}
      efficiencyImage={aterroEfficiency}
      ctaImage={ctaEngineers}
    />
  </Layout>
);

export default AterroAgregados;
