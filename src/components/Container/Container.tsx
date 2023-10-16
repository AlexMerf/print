import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps {
  children?: ReactNode;
  withoutPadding?: boolean;
  id?: string;
}

export const Container = ({ children, withoutPadding, id }: IProps) => {
  return (
    <div className={styles.container} data-padding={withoutPadding} id={id}>
      {children}
    </div>
  );
};
