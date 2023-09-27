interface IDialogProps extends React.PropsWithChildren {
  isOpen: boolean
  onClose: () => unknown
  className?: string
}
