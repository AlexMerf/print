import { forwardRef } from 'react';
import { motion, AnimationProps, MotionProps } from 'framer-motion';
import cn from 'classnames';

import styles from './styles.module.scss';
import { IButtonProps } from '../../types/Button.type';

export const Button = forwardRef<
  HTMLButtonElement,
  IButtonProps & MotionProps & AnimationProps
>(
  (
    {
      children,
      className,
      onClick,
      disabled,
      forwardedRef,
      variant,
      fullWidth,
      isLoading,
      size,
      color,
      title,
      type,
      colorsType = 'secondary',
      ...rest
    }: IButtonProps,
    ref
  ) => {
    return (
      <motion.button
        ref={forwardedRef || ref}
        className={cn(styles.container, className)}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        disabled={disabled}
        data-variant={variant}
        data-full-width={fullWidth}
        data-size={size}
        data-type={type}
        title={title}
        data-color={colorsType}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);
