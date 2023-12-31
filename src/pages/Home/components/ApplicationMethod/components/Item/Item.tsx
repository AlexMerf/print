import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  gridArea: 'a' | 's' | 'd' | 'f' | 'g' | string;
}

export const Item = ({ gridArea, imageAlt, imageSrc, link, title }: IProps) => {
  return (
    <div className={cn(styles.container, styles[gridArea])}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={styles.img}
        width={540}
        height={757}
        loading="lazy"
      />
      <span className={styles.title}>{title}</span>
      <div className={styles.bgDark} />
      <Link to={`/methods/${link}`} className={styles.link} />
    </div>
  );
};
