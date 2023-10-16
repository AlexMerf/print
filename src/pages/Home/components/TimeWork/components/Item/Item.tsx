import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  description?: string;
  bgColor: string;
  gridArea: string;
  index?: number;
}

export const Item = ({
  title,
  description,
  bgColor,
  gridArea,
  index,
}: IProps) => {
  return (
    <div
      className={cn(styles.container, styles[gridArea])}
      style={{ background: bgColor }}
    >
      <div className={styles.decor} data-index={index}>
        <img src="/image/hero/decor.svg" alt="" />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};
