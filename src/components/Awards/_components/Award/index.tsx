'use client';

// @ts-expect-error: no type declaration is available for this package
import Flippy, { BackSide, FrontSide } from 'react-flippy';

import classes from './index.module.scss';
import { AwardProps } from './models';

export const Award = ({ frontComponent, backComponent }: AwardProps) => {
  return (
    <Flippy className={classes.container} flipOnHover>
      <FrontSide className={classes.inside_container}>{frontComponent}</FrontSide>
      <BackSide className={classes.inside_container}>{backComponent}</BackSide>
    </Flippy>
  );
};
