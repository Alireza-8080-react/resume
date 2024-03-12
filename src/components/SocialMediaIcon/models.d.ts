import { ReactNode } from 'react';

export interface SocialMediaIconProps {
  /**
   * tooltip title
   */
  title: string;
  /**
   * a link which would navigate on new tab on click
   */
  href: string;
  /**
   * icon goes here
   */
  children: ReactNode;
}
