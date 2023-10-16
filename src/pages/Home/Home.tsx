import { Footer } from '../../components';
import {
  ApplicationMethod,
  Box,
  FormSection,
  Goods,
  Hero,
  Reviews,
  Services,
  TimeWork,
} from './components';

export const Home = () => {
  return (
    <>
      <Hero />
      <Box />
      <main>
        <Goods />
        <ApplicationMethod />
        <Services />
        <TimeWork />
        <Reviews />
        <FormSection />
      </main>
      <Footer />
    </>
  );
};
