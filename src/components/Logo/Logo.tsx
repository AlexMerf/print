import { ImgHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  type?: string;
  classNameContainer?: string;
  classNameLogo?: string;
}

export const Logo = ({
  type,
  classNameContainer,
  classNameLogo,
  ...props
}: IProps) => {
  return (
    <Link to={'/'} className={cn(styles.container, classNameContainer)}>
      <img
        src="/image/logo.svg"
        alt="Logo Print студия"
        {...props}
        className={classNameLogo}
      />
    </Link>
  );
};
