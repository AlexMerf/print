import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { IconLinkType } from '../../types/IconLink.type';

import styles from './styles.module.scss';

export const IconLink = ({ icon, title, ...props }: IconLinkType) => {
  return (
    <motion.div whileTap={{ scale: 0.9 }} className={styles.container}>
      <Link className={styles.container} title={title} {...props}>
        {icon}
      </Link>
    </motion.div>
  );
};
