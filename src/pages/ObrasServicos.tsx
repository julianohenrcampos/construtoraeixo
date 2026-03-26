import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SegmentPageContent from "@/components/SegmentPageContent";
import obrasTeam from "@/assets/segments/obras_team.png?w=800&format=webp&quality=75";
import obrasSupervision from "@/assets/segments/obras_supervision.png?w=800&format=webp&quality=75";
import obrasOperation from "@/assets/segments/obras_operation.png?w=800&format=webp&quality=75";
import ctaEngineers from "@/assets/segments/cta_engineers.png?w=800&format=webp&quality=75";
import obrasBg from "@/assets/segments/obras_bg_opt.jpg?w=1920&format=webp&quality=75";

const ObrasServicos = () => (
  <Layout>
    <PageBanner
      title={<>Obras e <span className="text-gradient">Serviços</span></>}
      subtitle="Execução de obras com alto padrão técnico, eficiência operacional e compromisso com qualidade e resultados."
    />
    <SegmentPageContent
      backgroundImage={obrasBg}
      institutionalParagraphs={[
        "A Construtora Eixo executa obras e serviços com excelência técnica, aplicando processos eficientes e garantindo alto desempenho em todas as etapas da execução.",
        "Com uma equipe experiente e estrutura robusta, atuamos na condução de projetos complexos, assegurando qualidade, segurança e cumprimento de prazos. Nossa atuação é orientada por planejamento estratégico e controle rigoroso, permitindo entregas consistentes e confiáveis.",
      ]}
      solutions={{
        title: "Nossas Soluções",
        items: [
          "Execução de obras de infraestrutura.",
          "Execução de obras de recuperação ambiental.",
          "Obras prediais e reformas.",
          "Serviços técnicos especializados.",
          "Gestão e coordenação de equipes em campo.",
          "Execução de projetos com alto grau de complexidade.",
        ],
      }}
      solutionsImage={obrasTeam}
      differentials={{
        title: "Diferenciais que Fazem a Diferença",
        items: [
          "Equipe técnica experiente e qualificada.",
          "Planejamento eficiente e execução controlada.",
          "Alto padrão de qualidade nas entregas.",
          "Cumprimento rigoroso de prazos.",
          "Aplicação de soluções técnicas inovadoras.",
          "Gestão orientada à produtividade.",
        ],
      }}
      differentialsImage={obrasSupervision}
      efficiency={{
        intro: "Nosso modelo operacional garante vantagem competitiva em todas as obras:",
        items: [
          "Redução de custos operacionais.",
          "Maior controle sobre a cadeia produtiva.",
          "Otimização de recursos.",
          "Agilidade na execução.",
        ],
        outro: "A integração entre nossos recursos próprios e a engenharia aplicada permite maior eficiência e confiabilidade.",
      }}
      efficiencyImage={obrasOperation}
      ctaImage={ctaEngineers}
    />
  </Layout>
);

export default ObrasServicos;
