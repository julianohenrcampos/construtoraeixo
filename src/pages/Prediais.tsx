import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SegmentPageContent from "@/components/SegmentPageContent";
import prediaisStructure from "@/assets/segments/prediais_structure.png?w=800&format=webp&quality=75";
import prediaisDetail from "@/assets/segments/prediais_detail.png?w=800&format=webp&quality=75";
import prediaisResult from "@/assets/segments/prediais_result.png?w=800&format=webp&quality=75";
import ctaEngineers from "@/assets/segments/cta_engineers.png?w=800&format=webp&quality=75";
import prediaisBg from "@/assets/segments/prediais_bg.svg";

const Prediais = () => (
  <Layout>
    <PageBanner
      title={<>Obras <span className="text-gradient">Prediais</span></>}
      subtitle="Desenvolvimento de obras prediais com engenharia aplicada, controle técnico e excelência na execução."
    />
    <SegmentPageContent
      backgroundImage={prediaisBg}
      institutionalParagraphs={[
        "A Construtora Eixo atua na execução e gerenciamento de obras prediais, oferecendo soluções completas que aliam qualidade, eficiência e inovação.",
        "Aplicamos metodologias modernas de engenharia para garantir maior controle, precisão e desempenho em cada etapa do projeto. Nosso compromisso é entregar obras com alto padrão técnico, respeitando prazos, custos e requisitos normativos.",
      ]}
      solutions={{
        title: "Nossas Soluções",
        items: [
          "Execução de obras prediais",
          "Reformas e ampliações",
          "Gerenciamento de obras",
          "Levantamento topográfico",
          "Estudos de sondagem",
          "Compatibilização de projetos",
          "Adequação às normas técnicas",
        ],
      }}
      solutionsImage={prediaisStructure}
      differentials={{
        title: "Diferenciais dos Serviços",
        items: [
          "Aplicação de BIM para maior precisão e previsibilidade",
          "Integração entre disciplinas (estrutura, elétrica, hidráulica)",
          "Planejamento eficiente e controle de cronograma",
          "Redução de retrabalho e inconsistências",
          "Gestão do ciclo completo do empreendimento",
        ],
      }}
      differentialsImage={prediaisDetail}
      efficiency={{
        intro: "A Eixo potencializa a execução de obras prediais por meio de:",
        items: [
          "Controle tecnológico próprio",
          "Estrutura operacional integrada",
          "Otimização de recursos",
          "Redução de custos e prazos",
        ],
        outro: "Nosso modelo garante maior eficiência e qualidade na entrega final.",
      }}
      efficiencyImage={prediaisResult}
      ctaImage={ctaEngineers}
    />
  </Layout>
);

export default Prediais;
