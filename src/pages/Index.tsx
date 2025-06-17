
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WorkGallery from '@/components/WorkGallery';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WorkGallery />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
