import { useState } from 'react';
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
      <h1 className={styles.title}>
        Профессиональная печать на футболках, толстовках, тканях и не только!
      </h1>
      <span className={styles.subTitle}>Принимаем заказы со всей Росии</span>
      <Button className={styles.btn} onClick={onOpenPopup}>
        Узнать стоимость
      </Button>
      <Popup onClose={onClosePopup} open={open} />
    </div>
  );
};
