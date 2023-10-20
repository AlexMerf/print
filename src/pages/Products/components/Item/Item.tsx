import { Button } from '../../../../components';

import styles from './styles.module.scss';

interface IProps {
  item: {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    price: number | null;
  };
}

export const Item = ({ item }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperImg}>
        <img
          src={item.imgSrc}
          alt={item.imgAlt}
          width={400}
          height={400}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{item.title}</span>
        {item.description && (
          <span className={styles.description}>{item.description}</span>
        )}
        {item.price && <span className={styles.price}>от {item.price} р*</span>}
      </div>
      <Button>заказать</Button>
    </div>
  );
};
