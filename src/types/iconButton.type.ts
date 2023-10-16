import { ReactNode, Ref } from 'react';

export interface IconButtonType {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  forwardedRef?: Ref<HTMLButtonElement>;
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  variant?: 'outline' | 'contain' | 'text';
}
