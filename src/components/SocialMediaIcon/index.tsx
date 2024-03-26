import { IconButton } from '../IconButton';
import { Link } from '../Link';
import { Tooltip } from '../Tooltip';
import classes from './index.module.scss';
import { SocialMediaIconProps } from './models';

export const SocialMediaIcon = ({ title, href, children }: SocialMediaIconProps) => {
  return (
    <Link href={href}>
      <Tooltip title={title}>
        <IconButton size='large' className={classes.icon}>
          {children}
        </IconButton>
      </Tooltip>
    </Link>
  );
};
