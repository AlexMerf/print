import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button, Popup } from '../../../../../../components';

import styles from './styles.module.scss';

export const Title = () => {
  const [open, setOpen] = useState(false);

  const onClosePopup = () => {
    setOpen(false);
  };

  const onOpenPopup = () => {
    setOpen(true);
  };

  return (
    <div className={styles.wrapperTitle}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Профессиональная печать на футболках, толстовках, тканях и не только!
      </motion.h1>
      <span className={styles.subTitle}>Принимаем заказы со всей Росии</span>
      <Button className={styles.btn} onClick={onOpenPopup}>
        Узнать стоимость
      </Button>
      <Popup onClose={onClosePopup} open={open} />
    </div>
  );
};
