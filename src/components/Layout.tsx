import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-0">{children}</div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
