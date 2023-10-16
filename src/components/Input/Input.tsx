import { InputProps } from '../../types/input.type';
import cn from 'classnames';

import styles from './styles.module.scss';

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input type="text" className={cn(styles.input, className)} {...props} />
  );
};
