import { Grid as MuiGrid } from '@mui/material';

import { GridProps } from './models';

export const Grid = ({
  item,
  container,
  spacing,
  xl,
  lg,
  md,
  sm,
  xs,
  children,
  className,
  alignItems,
  justifyContent,
  role
}: GridProps) => {
  return (
    <MuiGrid
      item={item}
      container={container}
      spacing={spacing}
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      justifyContent={justifyContent}
      alignItems={alignItems}
      className={className}
      role={role}
    >
      {children}
    </MuiGrid>
  );
};
