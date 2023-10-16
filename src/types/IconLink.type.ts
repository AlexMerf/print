import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

export interface IconLinkType extends LinkProps {
  variant?: 'outline' | 'contained';
  icon: ReactNode;
  title?: string;
}
