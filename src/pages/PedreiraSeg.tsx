import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import SegmentPageContent from "@/components/SegmentPageContent";
import pedreiraSolutions from "@/assets/segments/pedreira_solutions.jpg?w=800&format=webp&quality=75";
import pedreiraExecution from "@/assets/segments/pedreira_execution.jpg?w=800&format=webp&quality=75";
import pedreiraEfficiency from "@/assets/segments/pedreira_efficiency.jpg?w=800&format=webp&quality=75";
import ctaEngineers from "@/assets/segments/cta_engineers.png?w=800&format=webp&quality=75";
import pedreiraBg from "@/assets/segments/pedreira_bg.svg";

const PedreiraSeg = () => (
  <Layout>
    <PageBanner
      title={<><span className="text-gradient">Pedreira</span></>}
      subtitle="Extração e beneficiamento de rocha com controle granulométrico, gestão ambiental e alta capacidade produtiva."
    />
    <SegmentPageContent
      backgroundImage={pedreiraBg}
      institutionalParagraphs={[
        "A Construtora Eixo opera pedreiras com tecnologia de ponta para extração e beneficiamento de rochas, produzindo agregados de alta qualidade para obras de infraestrutura e pavimentação.",
        "Com processos de britagem primária e secundária, garantimos a produção de britas graduadas, pó de pedra, rachão e pé-de-muro, sempre em conformidade com as especificações técnicas exigidas. Nossa operação é orientada pela excelência técnica, segurança operacional e responsabilidade ambiental.",
      ]}
      solutions={{
        title: "Nossas Soluções",
        items: [
          "Extração e desmonte de rocha.",
          "Britagem primária e secundária.",
          "Produção de britas graduadas e pó de pedra.",
          "Fornecimento de rachão e pé-de-muro.",
          "Classificação e peneiramento de agregados.",
          "Controle granulométrico conforme normas DNIT/ABNT.",
        ],
      }}
      solutionsImage={pedreiraSolutions}
      differentials={{
        title: "Diferenciais da Operação de Pedreira",
        items: [
          "Equipamentos de britagem de última geração.",
          "Controle granulométrico rigoroso e certificado.",
          "Capacidade produtiva para grandes volumes.",
          "Gestão ambiental com licenciamento completo.",
          "Plano de lavra otimizado para máximo aproveitamento.",
          "Segurança operacional com protocolos rigorosos.",
        ],
      }}
      differentialsImage={pedreiraExecution}
      efficiency={{
        intro: "A operação de pedreira da Eixo é projetada para máxima eficiência e qualidade:",
        items: [
          "Produção verticalizada de agregados.",
          "Redução de custos com insumos próprios.",
          "Monitoramento contínuo da qualidade.",
          "Logística integrada com as frentes de obra.",
        ],
        outro: "A integração entre a pedreira e as obras em execução garante fornecimento ágil, redução de custos logísticos e controle total sobre a qualidade dos materiais utilizados.",
      }}
      efficiencyImage={pedreiraEfficiency}
      ctaImage={ctaEngineers}
    />
  </Layout>
);

export default PedreiraSeg;
