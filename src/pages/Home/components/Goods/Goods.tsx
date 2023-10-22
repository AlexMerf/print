import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  Button,
  Container,
  HomeTitleBox,
  Popup,
  Section,
} from '../../../../components';
import { Item } from './components';

import styles from './styles.module.scss';

const listItems = [
  {
    title: 'Печать на текстильных изделиях',
    src: '/image/goods/1.webp',
    alt: 'Футболка и толстовка с логотипом',
    link: 'textile_products',
  },
  {
    title: 'Изготовление сувенирной продукции',
    src: '/image/goods/2.webp',
    alt: 'Сувенирная продукция с логотипом',
    link: 'souvenirs',
  },
  {
    title: 'Аксессуары',
    src: '/image/goods/3.webp',
    alt: 'Аксессуары с логотипом',
    link: 'accessories',
  },
  {
    title: 'Жилеты и спецодежда с логотипом',
    src: '/image/goods/4.webp',
    alt: 'Жилеты и спецодежда с логотипом',
    link: 'workwear',
  },
  {
    title: 'Изготовление бирок',
    src: '/image/goods/5.webp',
    alt: 'Бирки с логотипом',
    link: 'tags',
  },
  {
    title: 'Широкоформатная печать, полиграфия',
    src: '/image/goods/6.webp',
    alt: 'Полиграфические изделия',
    link: 'polygraphy',
  },
];

export const Goods = () => {
  const [open, setOpen] = useState(false);

  const onClosePopup = () => {
    setOpen(false);
  };

  const onOpenPopup = () => {
    setOpen(true);
  };

  return (
    <Container id="prices" className={styles.containerMain}>
      <Section className={styles.container} withoutTop>
        <HomeTitleBox
          title="Большой выбор изделий для создания ваших уникальных дизайнов"
          maxWidth="919px"
        />
        <div className={styles.content}>
          <div className={styles.items}>
            {listItems.map((item, index) => (
              <Item
                key={`${item.title}_${index}`}
                imgAlt={item.alt}
                imgSrc={item.src}
                title={item.title}
                link={item.link}
                index={index}
              />
            ))}
          </div>
          <div className={styles.box}>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Закажите печать уникального дизайна прямо сейчас
            </motion.h2>
            <Button colorsType="primary" onClick={onOpenPopup}>
              заказать печать
            </Button>
            <Popup onClose={onClosePopup} open={open} />
          </div>
        </div>
      </Section>
    </Container>
  );
};
