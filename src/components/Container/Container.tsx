import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  children?: ReactNode;
  withoutPadding?: boolean;
  id?: string;
  className?: string;
}

export const Container = ({
  children,
  withoutPadding,
  id,
  className,
}: IProps) => {
  return (
    <div
      className={cn(styles.container, className)}
      data-padding={withoutPadding}
      id={id}
    >
      {children}
    </div>
  );
};
