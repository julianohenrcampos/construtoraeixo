import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SegmentPageContent from "@/components/SegmentPageContent";
import infraSolutions from "@/assets/segments/infra_solutions.png?w=800&format=webp&quality=75";
import infraExecution from "@/assets/segments/infra_execution.png?w=800&format=webp&quality=75";
import infraEfficiency from "@/assets/segments/infra_efficiency.png?w=800&format=webp&quality=75";
import ctaEngineers from "@/assets/segments/cta_engineers.png?w=800&format=webp&quality=75";
import infraBg from "@/assets/segments/infra_bg.svg";

const Infraestrutura = () => (
  <Layout>
    <PageBanner
      title={<>Infraestrutura / <span className="text-gradient">Gerenciamento</span></>}
      subtitle="Soluções em infraestrutura com planejamento estratégico, controle técnico e execução orientada à eficiência e resultados."
    />
    <SegmentPageContent
      backgroundImage={infraBg}
      institutionalParagraphs={[
        "A Construtora Eixo atua no desenvolvimento de projetos e obras de infraestrutura com foco em eficiência operacional, qualidade técnica e cumprimento rigoroso de prazos.",
        "Com uma abordagem integrada, aplicamos metodologias modernas de engenharia e gestão, garantindo maior previsibilidade, controle de custos e excelência na execução. Nossa atuação abrange desde estudos iniciais até o gerenciamento completo de obras e serviços, sempre alinhada às melhores práticas do setor.",
      ]}
      solutions={{
        title: "Nossas Soluções",
        items: [
          "Gerenciamento e supervisão de projetos de infraestrutura",
          "Fiscalização técnica de obras e serviços",
          "Estudos de viabilidade técnica e econômica",
          "Análise crítica e reestruturação de projetos",
          "Diagnóstico técnico e otimização de soluções",
          "Estruturação de projetos com base em metodologias modernas (PMI e FEL)",
          "Desenvolvimento de soluções para obras públicas e privadas",
        ],
      }}
      solutionsImage={infraSolutions}
      differentials={{
        title: "Diferenciais que Elevam o Padrão da Engenharia",
        items: [
          "Aplicação de metodologia BIM (Building Information Modeling)",
          "Planejamento estruturado com base em FEL (Front-End Loading)",
          "Integração multidisciplinar de projetos",
          "Controle rigoroso de prazos e custos",
          "Identificação antecipada de riscos e inconsistências",
          "Equipe técnica altamente qualificada",
          "Redução de retrabalho e aumento da produtividade",
        ],
      }}
      differentialsImage={infraExecution}
      efficiency={{
        intro: "A Eixo se destaca pela sua estrutura própria e capacidade operacional, garantindo maior autonomia e controle em todas as etapas do projeto.",
        items: [
          "Produção própria de insumos",
          "Controle tecnológico com laboratório especializado",
          "Frota moderna de equipamentos",
          "Integração entre planejamento e execução",
        ],
        outro: "Essa estrutura permite maior agilidade, redução de custos e alto padrão de qualidade na entrega.",
      }}
      efficiencyImage={infraEfficiency}
      ctaImage={ctaEngineers}
    />
  </Layout>
);

export default Infraestrutura;
