import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

import { Container, IconButton, Logo, Navigation } from '..';
import { Social } from './components';

import styles from './styles.module.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container withoutPadding>
      <footer className={styles.container}>
        <div className={styles.topFooter}>
          <div className={styles.wrapperLogo}>
            <Logo width={183} height={126} classNameContainer={styles.logo} />
            <Link to="tel:79263810011" className={styles.linkTelMobile}>
              +7 (926) 381-00-11
            </Link>
          </div>
          <div className={styles.middleBox}>
            <Social />
            <div className={styles.wrapperNav}>
              <Navigation className={styles.nav} />
              <IconButton
                className={styles.btnArrowMobile}
                aria-label="В начало страницы"
                title="В начало страницы"
                onClick={scrollToTop}
              >
                <IoIosArrowDown className={styles.icon} />
              </IconButton>
            </div>
          </div>
          <div className={styles.lastBox}>
            <Link to="tel:79263810011" className={styles.linkTel}>
              +7 (926) 381-00-11
            </Link>
            <IconButton
              className={styles.btnArrow}
              aria-label="В начало страницы"
              onClick={scrollToTop}
              title="В начало страницы"
            >
              <IoIosArrowDown className={styles.icon} />
            </IconButton>
          </div>
        </div>
        <div className={styles.lowerFooter}>
          <Link to="/politic">Политика конфиденциальности</Link>
          <Link to={'/'}>Создание сайта</Link>
        </div>
      </footer>
    </Container>
  );
};
