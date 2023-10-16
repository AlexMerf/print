import { useState } from 'react';
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
    alt: 'Image',
    link: '',
  },
  {
    title: 'Изготовление сувенирной продукции',
    src: '/image/goods/2.webp',
    alt: '',
    link: '',
  },
  { title: 'Аксессуары', src: '/image/goods/3.webp', alt: 'Image', link: '' },
  {
    title: 'Жилеты и спецодежда с логотипом',
    src: '/image/goods/4.webp',
    alt: 'Image',
    link: '',
  },
  {
    title: 'Изготовление бирок',
    src: '/image/goods/5.webp',
    alt: 'Image',
    link: '',
  },
  {
    title: 'Широкоформатная печать, полиграфия',
    src: '/image/goods/6.webp',
    alt: 'Image',
    link: '',
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
    <Container id="prices">
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
            <h2>Закажите печать уникального дизайна прямо сейчас</h2>
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
