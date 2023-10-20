import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Container, Footer, Header, Section } from '../../components';

import styles from './styles.module.scss';

export const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Контакты Студии Печати на Изделиях: Где Мы Находимся</title>
        <meta
          name="description"
          content="Наши офисы находятся в удобных местах: г. Химки, ул. Профсоюзная, д. 5 кв. 1, пос. Знамя Октября, д. 31, и г. Одинцово, Привокзальная площадь. Свяжитесь с нами, и мы поможем воплотить ваши дизайнерские идеи в жизнь."
        />
      </Helmet>
      <Header onlyHeader />
      <Container>
        <Section className={styles.container} withoutTop>
          <main className={styles.wrapper}>
            <div className={styles.header}>
              <h1>Контакты нашей студии</h1>

              <dl>
                <div>
                  <dt>Телефон:</dt>
                  <dd>
                    <Link to="tel:79263810011" className={styles.link}>
                      +7 (926) 381-00-11
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt>E-mail:</dt>
                  <dd>
                    <Link
                      to="mailto:printstudiya@bk.ru"
                      className={styles.link}
                    >
                      printstudiya@bk.ru
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
            <div className={styles.mapsWrapper}>
              <span className={styles.title}>Адреса:</span>
              <div className={styles.maps}>
                <div className={styles.mapBox}>
                  <div className={styles.map}>
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e843723b920cbf7cb72a66df6b66d67be7ca41c9fc112de8b9e8aeafc5458dc&amp;source=constructor"
                      width="100%"
                      height="388"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div>
                    <span>г. Химки, ул. Проспект Мельникова д.5 кв.1</span>
                  </div>
                </div>
                <div className={styles.mapBox}>
                  <div className={styles.map}>
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A4d9274de557878c2cb172363a680f873c6e18bd8e7c1b41981bac8c5977373fb&amp;source=constructor"
                      width="100%"
                      height="388"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div>
                    <span>
                      Производство —<br />
                      пос. Знамя Октября, д. 31
                    </span>
                  </div>
                </div>
                <div className={styles.mapBox}>
                  <div className={styles.map}>
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f63aebb3342f54829989a89f9cae0db38078dfceabdb12d2e0c4bd57ccd5b65&amp;source=constructor"
                      width="100%"
                      height="388"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div>
                    <span>г. Одинцово, Привокзальная площадь</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Section>
      </Container>
      <Footer />
    </>
  );
};
