import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

import { Button, IconButton, Input } from '..';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const Popup = ({ onClose, open }: IProps) => {
  if (!open) {
    return null;
  }

  return createPortal(
    <motion.section
      className={styles.container}
      key="popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.overlay} role="button" onClick={onClose} />
      <motion.article
        key="popup-content"
        className={styles.content}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
      >
        <div className={styles.popup}>
          <header className={styles.header}>
            <IconButton
              aria-label="Закрыть popup"
              onClick={onClose}
              className={styles.btnClose}
            >
              <AiOutlineClose />
            </IconButton>
            <div className={styles.wrapperTitle}>
              <h2 className={styles.title}>Оставьте заявку</h2>
              <span className={styles.subTitle}>
                Заполните форму и мы свяжемся с вами
              </span>
            </div>
          </header>
          <div className={styles.inputs}>
            <Input placeholder="Ваше имя" className={styles.input} />
            <Input placeholder="Ваш телефон" className={styles.input} />
            <Button>Сделать заказ</Button>
            <span className={styles.text}>
              Нажимая на кнопку «Отправить», вы соглашаетесь с{' '}
              <Link to="/politic" className={styles.link}>
                Политикой конфиденциальности
              </Link>
            </span>
          </div>
        </div>
      </motion.article>
    </motion.section>,
    document.body
  );
};
