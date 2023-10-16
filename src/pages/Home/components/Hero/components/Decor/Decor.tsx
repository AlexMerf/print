import { motion } from 'framer-motion';

import styles from './styles.module.scss';

interface IProps {
  variant: 'left' | 'right';
}

export const Decor = ({ variant }: IProps) => {
  return (
    <>
      {variant === 'left' ? (
        <div className={styles.left_decor}>
          <motion.img
            src="/image/hero/decor.svg"
            alt="Декор"
            loading="lazy"
            className={styles.decor}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="/image/hero/shot.webp"
            alt="Футболка"
            loading="lazy"
            className={styles.shot}
            initial={{ opacity: 0, x: -100, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 29 }}
            transition={{ delay: 0.5 }}
          />
        </div>
      ) : (
        <div className={styles.right_decor}>
          <motion.img
            src="/image/hero/decor.svg"
            alt="Декор"
            loading="lazy"
            className={styles.decor}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="/image/hero/shot2.webp"
            alt="Футболка"
            loading="lazy"
            className={styles.shot}
            initial={{ opacity: 0, x: 100, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: -23 }}
            transition={{ delay: 0.5 }}
          />
        </div>
      )}
    </>
  );
};
