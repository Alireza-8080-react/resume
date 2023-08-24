export interface DrawerProps {
  onClose: () => void;
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
  title?: string;
  className?: string;
}
