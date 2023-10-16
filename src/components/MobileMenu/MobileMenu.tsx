import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';

import { Drawer, IconButton, IconLink, Logo, Navigation } from '..';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

interface IProps {
  onClose: () => void;
  open: boolean;
}

export const MobileMenu = ({ onClose, open }: IProps) => {
  return (
    <Drawer onClose={onClose} open={open}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo width={183} height={126} classNameContainer={styles.logo} />
          <IconButton onClick={onClose} aria-label="close">
            <AiOutlineClose className={styles.icon} />
          </IconButton>
        </header>
        <Navigation className={styles.nav} direction="columns" />
        <div className={styles.social}>
          <div className={styles.iconsBtn}>
            <IconLink
              to={'/'}
              icon={<FaTelegramPlane className={styles.icon} />}
              aria-label="Телеграмм"
              title="Телеграмм"
              className={styles.linkIcon}
            />
            <IconLink
              to={'/'}
              icon={<FaWhatsapp className={styles.icon} />}
              aria-label="WhatsApp"
              title="WhatsApp"
              className={styles.linkIcon}
            />
            <IconLink
              to={'/'}
              icon={<AiOutlineMail className={styles.icon} />}
              aria-label="email"
              title="email"
              className={styles.linkIcon}
            />
          </div>
          <Link to="tel:79263810011" className={styles.link}>
            +7 (926) 381-00-11
          </Link>
        </div>
      </div>
    </Drawer>
  );
};
