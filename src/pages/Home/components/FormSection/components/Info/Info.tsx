import cn from 'classnames';

import styles from './styles.module.scss';

export const Info = () => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.item, styles.carItem)}>
        <div className={styles.wrapperImage}>
          <img src="/image/car.svg" alt="Машина" width={60} height={60} />
        </div>
        <p className={styles.text}>
          Доставка осуществляется, как своими курьерами, так и с помощью услуг
          компании СДЕК. Стоимость доставки курьером оговаривается
          индивидуально, доставка компанией СДЕК в соответствии с тарифами.
        </p>
      </div>
      <div className={cn(styles.item, styles.percentItem)}>
        <div className={styles.wrapperImage}>
          <img src="/image/50.svg" alt="Машина" width={60} height={60} />
        </div>
        <p className={styles.text}>
          Доставка осуществляется, как своими курьерами, так и с помощью услуг
          компании СДЕК. Стоимость доставки курьером оговаривается
          индивидуально, доставка компанией СДЕК в соответствии с тарифами.
        </p>
      </div>
    </div>
  );
};
