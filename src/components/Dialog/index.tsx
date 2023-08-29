import { Button, Dialog as MuiDialog, DialogActions, DialogTitle } from '@mui/material';

import { DialogProps } from './models';

export const Dialog = ({
  isOpen,
  onClose,
  children,
  title,
  onConfirm,
  confirmText = 'OK',
  cancelText = 'cancel',
  onCancel
}: DialogProps) => {
  const handleCancel = () => (onCancel ? onCancel() : onClose());

  return (
    <MuiDialog open={isOpen} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {children}
      <DialogActions>
        {confirmText && <Button onClick={onConfirm}>{confirmText}</Button>}
        {cancelText && <Button onClick={handleCancel}>{cancelText}</Button>}
      </DialogActions>
    </MuiDialog>
  );
};
