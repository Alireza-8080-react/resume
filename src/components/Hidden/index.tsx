import { Hidden as MuiHidden } from '@mui/material';

import { HiddenProps } from './models';

export const Hidden = ({
  children,
  lgDown,
  lgUp,
  mdDown,
  mdUp,
  smDown,
  smUp,
  xlDown,
  xlUp,
  xsDown,
  xsUp
}: HiddenProps) => {
  return (
    <MuiHidden
      lgDown={lgDown}
      lgUp={lgUp}
      mdDown={mdDown}
      mdUp={mdUp}
      smDown={smDown}
      smUp={smUp}
      xlDown={xlDown}
      xlUp={xlUp}
      xsDown={xsDown}
      xsUp={xsUp}
    >
      {children}
    </MuiHidden>
  );
};
