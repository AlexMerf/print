import { motion } from 'framer-motion';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  maxWidth?: string;
}

export const HomeTitleBox = ({ title, maxWidth }: IProps) => {
  return (
    <div className={styles.wrapperTitle}>
      <motion.h2
        className={styles.title}
        style={{ maxWidth: maxWidth }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h2>
    </div>
  );
};
