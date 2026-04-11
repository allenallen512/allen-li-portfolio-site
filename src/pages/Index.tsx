import Layout from "../components/Layout";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import WorksSection from "../sections/WorksSection";
import ContactSection from "../sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
