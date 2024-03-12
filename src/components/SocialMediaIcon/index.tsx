import { IconButton } from '../IconButton';
import { Link } from '../Link';
import { Tooltip } from '../Tooltip';
import classes from './index.module.scss';
import { SocialMediaIconProps } from './models';

export const SocialMediaIcon = ({ title, href, children }: SocialMediaIconProps) => {
  return (
    <Tooltip title={title}>
      <Link href={href}>
        <IconButton size='large'>
          <div className={classes.icon}>{children}</div>
        </IconButton>
      </Link>
    </Tooltip>
  );
};
