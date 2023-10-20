import { motion } from 'framer-motion';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  description?: string;
  bgColor: string;
  gridArea: string;
  index?: number;
}

export const Item = ({
  title,
  description,
  bgColor,
  gridArea,
  index,
}: IProps) => {
  return (
    <motion.div
      className={cn(styles.container, styles[gridArea])}
      style={{ background: bgColor }}
      initial={{
        opacity: 0,
        x:
          index === 0
            ? -30
            : index === 1
            ? 30
            : index === 2
            ? -30
            : index === 3
            ? 30
            : 0,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className={styles.decor} data-index={index}>
        <img
          src="/image/hero/decor.svg"
          alt="Декор клякса"
          width={193}
          height={169}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </motion.div>
  );
};
