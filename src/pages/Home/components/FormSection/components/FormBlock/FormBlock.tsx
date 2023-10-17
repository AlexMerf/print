import { Link } from 'react-router-dom';
import { Button, Input } from '../../../../../../components';

import styles from './styles.module.scss';

export const FormBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Input placeholder="Ваше имя" className={styles.input} />
        <Input placeholder="Ваш телефон" className={styles.input} />
        <Button>Сделать заказ</Button>
        <span className={styles.text}>
          Нажимая на кнопку «Сделать заказ», вы соглашаетесь с{' '}
          <Link className={styles.link} to="/politic">
            Политикой конфиденциальности
          </Link>
        </span>
      </div>
    </div>
  );
};
