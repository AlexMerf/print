import { Container, HomeTitleBox, Section } from '../../../../components';
import { Item } from './components';

import styles from './styles.module.scss';

const itemList = [
  {
    title: 'Основали студию в 2014 году',
    description: '',
    bgColor: '#41BAF7',
    gridArea: 'a',
  },
  {
    title: 'Постоянно развиваемся',
    description:
      'Набрались опыта, совершенствовали наше оборудования, внедрили новые технологии и в итоге, являемся настоящими профессионалами в отрасли печати и изготовления сувенирной и промо продукции',
    bgColor: '#FC5C1D',
    gridArea: 'd',
  },
  {
    title: 'У нас не бывает недовольных клиентов',
    description:
      'Нашими клиентами являются как крупные сетевые компании, так и небольшие предприятия, спортивные клубы, студии танцев и т.д. Мы одинаково рады всем нашим заказчикам. Как правило наши заказчики постоянные и это лучший отзыв о нашей работе',
    bgColor: '#43BF3A',
    gridArea: 's',
  },
  {
    title: 'Имеем собственное производство',
    description:
      'А также, команду умелых профессионалов и индивидуальный подход к каждому клиенту. Гарантируем, что обратившись к нам Вы получите Ваш заказ в надлежащем качестве и в условленный срок',
    bgColor: 'linear-gradient(105deg, #412FD0 -7.37%, #0479F2 68.04%)',
    gridArea: 'f',
  },
];

export const TimeWork = () => {
  return (
    <Container>
      <Section className={styles.container}>
        <HomeTitleBox title="Более 10 лет безупречной работы в области печати" />
        <div className={styles.content}>
          {itemList.map((item, index) => (
            <Item
              key={index}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
              gridArea={item.gridArea}
              index={index}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
};
