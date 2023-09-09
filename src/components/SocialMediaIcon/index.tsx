import { IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';

import { SocialMediaIconProps } from './models';

export const SocialMediaIcon = ({ title, href, iconClassName }: SocialMediaIconProps) => {
  return (
    <Tooltip title={title}>
      <Link href={href} target='_blank'>
        <IconButton size='large'>
          <i className={iconClassName} />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
