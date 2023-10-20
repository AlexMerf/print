import { motion } from 'framer-motion';
import cn from 'classnames';

import styles from './styles.module.scss';

export const Info = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={cn(styles.item, styles.carItem)}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className={styles.wrapperImage}>
          <img
            src="/image/car.svg"
            alt="Иконка доставки"
            width={60}
            height={60}
            loading="lazy"
          />
        </div>
        <p className={styles.text}>
          Доставка осуществляется, как своими курьерами, так и с помощью услуг
          компании СДЕК. Стоимость доставки курьером оговаривается
          индивидуально, доставка компанией СДЕК в соответствии с тарифами.
        </p>
      </motion.div>
      <motion.div
        className={cn(styles.item, styles.percentItem)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className={styles.wrapperImage}>
          <img
            src="/image/50.svg"
            alt="Иконка предоплаты"
            width={60}
            height={60}
            loading="lazy"
          />
        </div>
        <p className={styles.text}>
          Заказы стоимостью более 10000 руб. принимаются в производство после
          предоплаты в 50% от стоимости заказа.
        </p>
      </motion.div>
    </div>
  );
};
