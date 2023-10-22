import { Container, HomeTitleBox, Section } from '../../../../components';
import { FormBlock, Info } from './components';

import styles from './styles.module.scss';

export const FormSection = () => {
  return (
    <Container id="payment" className={styles.container}>
      <Section>
        <HomeTitleBox title="Наши условия оплаты и доставки" />
        <div className={styles.content}>
          <Info />
          <FormBlock />
        </div>
      </Section>
    </Container>
  );
};
