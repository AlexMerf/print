import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

import { IconButton, IconLink, Logo, MobileMenu, Navigation } from '..';

import styles from './styles.module.scss';

interface IProps {
  onlyHeader?: boolean;
}

export const Header = ({ onlyHeader }: IProps) => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const onCloseDrawer = () => {
    setOpenMobileMenu(false);
  };

  const onOpenDrawer = () => {
    setOpenMobileMenu(true);
  };

  return (
    <header className={styles.container} data-header={onlyHeader}>
      <Logo width={183} height={126} classNameContainer={styles.logo} />
      <Navigation className={styles.nav} />
      <div className={styles.social}>
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
        <Link to={'tel:79263810011'} className={styles.link}>
          +7 (926) 381-00-11
        </Link>
        <IconButton
          onClick={onOpenDrawer}
          className={styles.mobileBtn}
          aria-label="Открыть меню"
          title="Открыть меню"
        >
          <AiOutlineMenu className={styles.icon} />
        </IconButton>
        <MobileMenu onClose={onCloseDrawer} open={openMobileMenu} />
      </div>
    </header>
  );
};
