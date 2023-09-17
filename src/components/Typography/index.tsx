import { Typography as MuiTypography } from '@mui/material';

import { TypographyProps } from './models';

export const Typography = ({
  children,
  variant,
  className,
  color,
  component,
  textAlign
}: TypographyProps) => {
  return (
    <MuiTypography
      variant={variant}
      className={className}
      // @ts-expect-error: component can be undefined idk why it throws error
      component={component}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </MuiTypography>
  );
};
