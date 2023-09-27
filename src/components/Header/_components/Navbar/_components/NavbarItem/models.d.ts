import { HTMLAttributeAnchorTarget } from 'react';

export interface NavbarItemProps {
  /**
   * Title of the item
   */
  title: string;
  /**
   * The link which is navigated to on click.
   */
  link: string;
  /**
   * The icon which is used before text. see icons at https://boxicons.com
   */
  icon?: string;
  /**
   * Should open the link in parent, self, top or new tab?
   */
  target?: HTMLAttributeAnchorTarget;
}
