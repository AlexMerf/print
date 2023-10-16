import { ReactNode, Ref } from 'react';

export interface IButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  forwardedRef?: Ref<HTMLButtonElement>;
  variant?: 'outline' | 'contain' | 'text';
  fullWidth?: boolean;
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  title?: string;
  type?: 'error' | 'success';
  colorsType?: 'primary' | 'secondary';
}
