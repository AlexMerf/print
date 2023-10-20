import { Container, HomeTitleBox, Section } from '../../../../components';
import { Item } from './components';

import styles from './styles.module.scss';

const listItem = [
  {
    title: 'Цифровая печать',
    imageSrc: '/image/applicationMethod/1.webp',
    imageAlt: 'Процесс цифровой печати',
    link: 'digital_printing',
    gridArea: 'a',
  },
  {
    title: 'Шелкография',
    imageSrc: '/image/applicationMethod/2.webp',
    imageAlt: 'Процесс шелкографии',
    link: 'silkscreen_printing',
    gridArea: 's',
  },
  {
    title: 'Вышивка',
    imageSrc: '/image/applicationMethod/3.webp',
    imageAlt: 'Процесс вышивки',
    link: 'embroidery',
    gridArea: 'd',
  },
  {
    title: 'Сублимация',
    imageSrc: '/image/applicationMethod/4.webp',
    imageAlt: 'Процесс сублимации',
    link: 'sublimation',
    gridArea: 'f',
  },
  {
    title: 'Термотрансфер',
    imageSrc: '/image/applicationMethod/5.webp',
    imageAlt: 'Процесс термотрансфера',
    link: 'thermal_transfer',
    gridArea: 'g',
  },
];

export const ApplicationMethod = () => {
  return (
    <Container id="printing_methods">
      <Section className={styles.container}>
        <HomeTitleBox title="Помогаем создать макет для печати и подобрать наиболее подходящий метод нанесения" />
        <div className={styles.items}>
          {listItem.map((item, index) => (
            <Item
              key={index}
              gridArea={item.gridArea}
              imageAlt={item.imageAlt}
              imageSrc={item.imageSrc}
              link={item.link}
              title={item.title}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
};
