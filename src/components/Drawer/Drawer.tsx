import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import { IDrawer } from '../../types/Drawer.type';

import styles from './styles.module.scss';

export const Drawer = ({ children, open, onClose }: IDrawer) => {
  if (!open) {
    return null;
  }

  return createPortal(
    <motion.section
      className={styles.container}
      key="drawer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.overlay} role="button" onClick={onClose} />
      <motion.article
        key="drawer-content"
        className={styles.content}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.article>
    </motion.section>,
    document.body
  );
};
