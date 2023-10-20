import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>
          Студия печати на изделиях | Цифровая печать, Термотрансфер, Вышивка,
          Сублимация, Шелкография
        </title>
        <meta
          name="description"
          content="Наша студия печати предлагает разнообразные методы нанесения изображений на изделия: цифровая печать, термотрансфер, вышивка, шелкография и сублимация. Мы также имеем собственный швейный цех для производства уникальных изделий. Создайте персонализированные подарки и продукцию с нашей помощью!"
        />
      </Helmet>
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
