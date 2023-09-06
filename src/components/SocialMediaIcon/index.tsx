import { IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { SocialMediaIconProps } from './models';

export const SocialMediaIcon = ({ title, href, icon }: SocialMediaIconProps) => {
  return (
    <Tooltip title={title}>
      <Link href={href} target='_blank'>
        <IconButton>
          <i className={`bx bxl-${icon}`} />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
