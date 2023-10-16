import { Decor, Title } from './components';
import { Container, Header, Section } from '../../../../components';

import styles from './styles.module.scss';

export const Hero = () => {
  return (
    <Container withoutPadding>
      <Section
        className={styles.container}
        withoutTop={true}
        withoutBottom={true}
      >
        <Header />
        <Decor variant="left" />
        <Decor variant="right" />
        <Title />
      </Section>
    </Container>
  );
};
