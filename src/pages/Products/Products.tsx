import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import {
  Button,
  Container,
  Footer,
  Header,
  Nav,
  Popup,
  Section,
} from '../../components';
import { Item } from './components';

import styles from './styles.module.scss';

import data from '../../data/productsItems.json';

const list = [
  {
    title: 'Текстильные изделия',
    link: '/products/textile_products',
  },
  {
    title: 'Аксессуары',
    link: '/products/accessories',
  },
  {
    title: 'Сувениры',
    link: '/products/souvenirs',
  },
  {
    title: 'Бирки',
    link: '/products/tags',
  },
  {
    title: 'Жилеты и спецодежда',
    link: '/products/workwear',
  },
  {
    title: 'Широкоформатная печать, полиграфия',
    link: '/products/polygraphy',
  },
];

export const Products = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  if (id === undefined) {
    return <div>Параметр "id" отсутствует в URL</div>;
  }

  const productsId = id as keyof typeof data;

  const productsData = data[productsId];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const onClosePopup = () => {
    setOpen(false);
  };

  const onOpenPopup = () => {
    setOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{productsData.seo.title}</title>
        <meta name="description" content={productsData.seo.description} />
      </Helmet>
      <Header onlyHeader />
      <Container className={styles.container}>
        <Section className={styles.section} withoutTop>
          <Nav list={list} />
          <main className={styles.wrapper}>
            {productsData.description && (
              <div className={styles.descriptionMain}>
                <p>{productsData.description}</p>
              </div>
            )}
            <div className={styles.items}>
              {productsData.items.map((item, index) => (
                <Item key={index} item={item} onOpenPopup={onOpenPopup} />
              ))}
              {pathname.includes('tags') && (
                <div className={styles.specTags}>
                  <div className={styles.text}>
                    <p>
                      Для компаний, которые планируют выпускать свой бренд
                      одежды мы  предлагаем изготовление бирок для одежды из
                      атласа и габардина.
                      <br /> Полноцветная печать с помощью сублимации,
                      аккуратный обработанный край, любые размеры.
                    </p>
                    <p>
                      Так же мы хотим предложить изготовление шевронов и нашивок
                      любого вида и сложности. Возможно изготовление как
                      печатных шевронов, так и с помощью вышивального
                      оборудования.
                    </p>
                    <p>Стоимость рассчитывается индивидуально, исходя из ТЗ</p>
                  </div>
                  <Button colorsType="primary" className={styles.btn}>
                    Минимальная стоимость заказа 5000 р
                  </Button>
                </div>
              )}
              {pathname.includes('workwear') && (
                <div className={styles.specWorkwear}>
                  <div className={styles.text}>
                    <p>
                      Нашим клиентам, работающим в сфере, где используется спец.
                      форма мы готовы предложить изготовление спец. одежды
                      собственного производства (сигнальные жилеты, дутые
                      жилеты, а так же роба ) с качественным нанесением
                      символики компании.
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.helpText}>
              <span>
                *наличие всех изделий уточняйте у менеджера-консультанта
              </span>
              <span>
                *стоимость рассчитывается индивидуально, исходя из технического
                задания
              </span>
            </div>
          </main>
        </Section>
      </Container>
      <Popup onClose={onClosePopup} open={open} />
      <Footer />
    </>
  );
};
