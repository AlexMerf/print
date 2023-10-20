import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  className?: string;
  direction?: 'row' | 'columns';
}

const navList = [
  { title: '/', value: 'Главная' },
  { title: '/#prices', value: 'Услуги и цены' },
  { title: '/#printing_methods', value: 'Методы печати' },
  { title: '/#reviews', value: 'Отзывы' },
  { title: '/#payment', value: 'Оплата и доставка' },
  { title: '/contacts', value: 'Контакты' },
];

export const Navigation = ({ className, direction }: IProps) => {
  return (
    <nav className={cn(styles.container, className)} data-direction={direction}>
      {navList.map((item, index) => {
        if (item.title.includes('#')) {
          return (
            <a key={index} href={item.title} className={styles.link}>
              {item.value}
            </a>
          );
        } else {
          return (
            <NavLink
              key={index}
              to={item.title}
              className={({ isActive, isPending }) =>
                isPending
                  ? styles.link
                  : isActive
                  ? styles.linkActive
                  : styles.link
              }
            >
              {item.value}
            </NavLink>
          );
        }
      })}
    </nav>
  );
};
