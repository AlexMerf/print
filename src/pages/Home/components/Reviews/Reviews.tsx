import {
  Container,
  HomeTitleBox,
  Section,
  SliderHome,
} from '../../../../components';

import styles from './styles.module.scss';

const listItems = [
  {
    imgSrc: '/image/reviews/3.webp',
    imgAlt: 'Довольные дети в футболках от Print студии',
    title: 'Не первый раз заказывали футболки у Print студия для деток',
    description: [
      'Хочу выразить свою благодарность студии печати за профессиональный подход к выполнению нашего заказа! Мы обратились с задачей напечатать яркие и красочные изображения на футболках для наших маленьких подопечных из группы “Фантазеры”.',
      'Внимательно выслушали наши пожелания и предложил несколько интересных вариантов дизайна. Мы были приятно удивлены, насколько быстро и точно вы смогли понять и воплотить наши идеи в жизнь.',
    ],
  },
  {
    imgSrc: '/image/reviews/1.webp',
    imgAlt: 'Довольные дети в футболках от Print студии',
    title: 'Спасибо большое за футболки!',
    description: [
      'Наша организация заказала футболки для детей у Print Студия и мы полностью довольны результатом. Это был наш первый опыт сотрудничества с ними, и он оказался более чем удачным.',
      'Качество футболок и печати просто потрясающее. Футболки мягкие, удобные и безопасные для детей, что для нас имеет большое значение. Даже после нескольких стирок, цвета остались яркими и не выцвели.',
      'Родители и мы очень довольны сотрудничеством и результатом. ',
    ],
  },
  {
    imgSrc: '/image/reviews/2.webp',
    imgAlt: 'Довольные дети в футболках от Print студии',
    title: 'Спасибо большое за майки. Дети безумно довольны!!!',
    description: [
      'Мы заказали несколько моделей и были приятно удивлены качеством работы. Сотрудники Print студии проявили профессионализм и помогли нам с выбором, учитывая все пожелания.',
      'Футболки получились яркими, а рисунки - аккуратными. Отдельно хочется отметить индивидуальный подход и внимание к деталям. Мы остались довольны работой Print студии и рекомендуем их  всем родителям, которые хотят порадовать своих детей.',
    ],
  },
  {
    imgSrc: '/image/reviews/4.webp',
    imgAlt: 'Довольные дети в футболках от Print студии',
    title: 'Мастера с большим вниманием отнеслись к нашим пожеланиям',
    description: [
      'Качество печати просто на высоте! Теперь наши комплекты выглядят ярко, красиво и привлекают внимание. Мы очень довольны результатом и уже рекомендовали студию нашим друзьям.',
    ],
  },
];

export const Reviews = () => {
  return (
    <Container id="reviews" className={styles.container}>
      <Section>
        <HomeTitleBox title="Отзывы наших клиентов о сотрудничестве с нами" />
        <div className={styles.content}>
          <SliderHome items={listItems} />
        </div>
      </Section>
    </Container>
  );
};
