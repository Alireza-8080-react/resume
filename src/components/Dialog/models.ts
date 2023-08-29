import { ReactNode } from 'react';

export interface DialogProps {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  title?: string;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  onCancel?: () => void;
}
