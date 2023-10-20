import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button, Popup } from '../../../../components';

import styles from './styles.module.scss';

interface IContent {
  title: string;
  content: {
    title: string;
    text: string;
  }[];
}

interface IProps {
  title: string;
  description: string;
  content: IContent[];
}

export const Content = ({ content, description, title }: IProps) => {
  const [open, setOpen] = useState(false);

  const onClosePopup = () => {
    setOpen(false);
  };

  const onOpenPopup = () => {
    setOpen(true);
  };

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {title}
      </motion.h1>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <div className={styles.textWrapper}>
          {content.map((item, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.itemTitle}>{item.title}:</span>
              <div className={styles.itemContent}>
                {item.content.map((innerItem, i) => (
                  <div key={i} className={styles.innerItem}>
                    <span className={styles.innerItemTitle}>
                      {innerItem.title}:
                    </span>
                    <p className={styles.innerItemText}>{innerItem.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button colorsType="primary" className={styles.btn} onClick={onOpenPopup}>
        заказать печать
      </Button>
      <Popup onClose={onClosePopup} open={open} />
    </div>
  );
};
