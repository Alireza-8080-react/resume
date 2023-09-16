import Link from 'next/link';

import { SocialMediaIconProps } from './models';
import { IconButton } from '../IconButton';
import { Tooltip } from '../Tooltip';

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
