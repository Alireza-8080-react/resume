import classes from './index.module.scss';
import { ScrollbarProps } from './models';

export const Scrollbar = ({ className, children }: ScrollbarProps) => {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
};
