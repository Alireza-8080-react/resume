import { Tooltip } from '@mui/material';
import Link from 'next/link';

import { SocialMediaIconProps } from './models';
import { IconButton } from '../IconButton';

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
