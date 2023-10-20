import { Link, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';

interface IProps {
  list: {
    title: string;
    link: string;
  }[];
}

export const Nav = ({ list }: IProps) => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <nav className={styles.container}>
      {list.map((item, index) => (
        <Link
          key={index}
          to={`${item.link}`}
          className={styles.item}
          data-active={pathname.includes(item.link)}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
