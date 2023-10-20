import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Container, Footer, Header, Nav, Section } from '../../components';
import { Content, Slider } from './components';

import styles from './styles.module.scss';

import data from '../../data/methodsItems.json';

const list = [
  {
    title: 'Цифровая печать',
    link: '/methods/digital_printing',
  },
  {
    title: 'Шелкография',
    link: '/methods/silkscreen_printing',
  },
  {
    title: 'Вышивка',
    link: '/methods/embroidery',
  },
  {
    title: 'Сублимация',
    link: '/methods/sublimation',
  },
  {
    title: 'Термотрансфер',
    link: '/methods/thermal_transfer',
  },
];

export const MethodPage = () => {
  const { id } = useParams();

  if (id === undefined) {
    return <div>Параметр "id" отсутствует в URL</div>;
  }

  const methodId = id as keyof typeof data;

  const methodData = data[methodId];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{methodData.seo.title}</title>
        <meta name="description" content={methodData.seo.description} />
      </Helmet>
      <Header onlyHeader />
      <Container className={styles.container}>
        <Section className={styles.section} withoutTop>
          <Nav list={list} />
          <main className={styles.wrapper}>
            <Slider sliderItems={methodData.images} />
            <Content
              title={methodData.title}
              description={methodData.description}
              content={methodData.text}
            />
          </main>
        </Section>
      </Container>
      <Footer />
    </>
  );
};
