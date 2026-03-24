import { BackgroundPaths } from "@/components/ui/background-paths";

interface PageBannerProps {
  title: React.ReactNode;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0F2C] to-[#050816]">
      <BackgroundPaths />
      <div className="relative z-10 text-center px-4 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
