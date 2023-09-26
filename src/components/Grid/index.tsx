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
  role,
  direction,
  flexBasis,
  flex
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
      flexBasis={flexBasis}
      justifyContent={justifyContent}
      alignItems={alignItems}
      className={className}
      role={role}
      direction={direction}
      flex={flex}
    >
      {children}
    </MuiGrid>
  );
};
