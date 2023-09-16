import { Typography as MuiTypography } from '@mui/material';

import { TypographyProps } from './models';

export const Typography = ({ children, variant, className, color, component }: TypographyProps) => {
  return (
    // @ts-expect-error: component can be undefined idk why it throws error
    <MuiTypography variant={variant} className={className} component={component} color={color}>
      {children}
    </MuiTypography>
  );
};
