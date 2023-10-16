import { forwardRef } from 'react';
import { AnimationProps, MotionProps, motion } from 'framer-motion';
import cn from 'classnames';

import { IconButtonType } from '../../types/iconButton.type';

import styles from './styles.module.scss';

export const IconButton = forwardRef<
  HTMLButtonElement,
  IconButtonType & MotionProps & AnimationProps
>(
  (
    {
      children,
      className,
      onClick,
      disabled,
      forwardedRef,
      isLoading,
      size,
      title,
      variant,
      ...rest
    }: IconButtonType,
    ref
  ) => {
    return (
      <motion.button
        ref={forwardedRef || ref}
        className={cn(styles.btn, className)}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        disabled={disabled}
        data-size={size}
        data-variant={variant}
        title={title}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);
