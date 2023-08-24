import { Drawer as MuiDrawer, useMediaQuery, useTheme } from "@mui/material";
import { DrawerProps } from "./models";

export const Drawer = ({
  isOpen,
  onClose,
  children,
  title,
  className,
}: DrawerProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MuiDrawer
      anchor={matches ? "bottom" : "left"}
      open={isOpen}
      onClose={onClose}
      title={title}
      className={className}
    >
      {children}
    </MuiDrawer>
  );
};
