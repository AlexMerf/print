import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export const Social = () => {
  return (
    <div className={styles.container}>
      <Link to={'https://wa.me/79263810011'} className={styles.link}>
        <FaWhatsapp className={styles.icon} />
        <span>Написать в WhatsApp</span>
      </Link>
      <Link to={'/'} className={styles.link}>
        <FaTelegramPlane className={styles.icon} />
        <span>Написать в Telegram</span>
      </Link>
      <Link to={'mailto:printstudiya@bk.ru'} className={styles.link}>
        <AiOutlineMail className={styles.icon} />
        <span>printstudiya@bk.ru</span>
      </Link>
    </div>
  );
};
