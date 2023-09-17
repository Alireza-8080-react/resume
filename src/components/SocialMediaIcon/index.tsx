import { IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';

import classes from './index.module.scss';
import { SocialMediaIconProps } from './models';

export const SocialMediaIcon = ({ title, href, iconClassName }: SocialMediaIconProps) => {
  return (
    <Tooltip title={title}>
      <Link href={href} target='_blank'>
        <IconButton size='large'>
          <i className={`${classes.icon} ${iconClassName}`} />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
