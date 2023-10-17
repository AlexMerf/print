import { motion } from 'framer-motion';

import { Container, HomeTitleBox, Section } from '../../../../components';

import styles from './styles.module.scss';

export const Services = () => {
  return (
    <Container>
      <Section className={styles.container}>
        <HomeTitleBox title="Мы рады предложить Вам также услуги по пошиву изделий и раскрою тканей в собственном швейном производстве!" />
        <div className={styles.content}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.text}>
              <p>
                Пошив индивидуальной спортивной формы, сувенирных сумок,
                фартуков, подушек, создание этнического костюма с нанесением
                рисунка любой сложности — направление в котором мы работаем с
                1990 года.
              </p>
              <p>
                Мы плотно сотрудничаем с другими швейными производствами в теме
                раскроя ткани по лекалам заказчика и нанесения изображения на
                крой.
              </p>
              <p>
                Наши мастера качественно и в срок изготовят для Вас любое
                количество необходимой продукции из Вашей или собственной ткани.
              </p>
              <p>
                Опытные технологи при необходимости помогут Вам создать
                эксклюзивные, авторские швейные изделия!
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.wrapperImage}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <img src="/image/serviceImg.webp" alt="Image" />
          </motion.div>
        </div>
      </Section>
    </Container>
  );
};
