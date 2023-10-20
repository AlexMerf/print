import { motion } from 'framer-motion';

import { Section, Container } from '../../../../components';

import styles from './styles.module.scss';

const cards = [
  {
    icon: '/image/hero/1.svg',
    icon_alt: 'Иконка качества',
    description:
      'Делаем качественно и в срок, поэтому с нами работают крупные заказчики',
  },
  {
    icon: '/image/hero/2.svg',
    icon_alt: 'Иконка изделия',
    description: 'Предоставляем вещи для печати или печатаем на ваших',
  },
  {
    icon: '/image/hero/3.svg',
    icon_alt: 'Иконка изображения',
    description: 'Помогаем создать изображение и подобрать цвета для изделия',
  },
];

export const Box = () => {
  return (
    <Container>
      <Section className={styles.container} withoutTop withoutBottom>
        {cards.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <img
                src={item.icon}
                alt={item.icon_alt}
                className={styles.icon}
                width={60}
                height={60}
                loading="lazy"
              />
            </div>
            <p className={styles.text}>{item.description}</p>
          </motion.div>
        ))}
      </Section>
    </Container>
  );
};
