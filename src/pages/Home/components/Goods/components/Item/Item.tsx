import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
  index?: number;
}

export const Item = ({ title, imgSrc, imgAlt, link, index = 0 }: IProps) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index + 1) * 0.1 }}
    >
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.wrapperImage}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <Link to={link} className={styles.link} aria-label={title} />
    </motion.div>
  );
};
