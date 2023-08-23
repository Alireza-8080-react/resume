export interface DialogProps {
  onClose: () => void;
  isOpen: boolean;
  children: JSX.Element;
  title?: string;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  onCancel?: () => void;
}
