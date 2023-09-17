import { ReactNode } from 'react';

export interface HiddenProps {
  children?: ReactNode;
  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  lgDown?: boolean;
  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  lgUp?: boolean;
  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  mdDown?: boolean;
  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  mdUp?: boolean;
  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  smDown?: boolean;
  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  smUp?: boolean;
  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  xlDown?: boolean;
  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  xlUp?: boolean;
  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  xsDown?: boolean;
  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  xsUp?: boolean;
}
