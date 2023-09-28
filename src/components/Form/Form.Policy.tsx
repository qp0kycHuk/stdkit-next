import { useToggle } from '@/hooks/useToggle'
import { DialogPolicy } from '../DialogPolicy'

export function Policy() {
  const [policyDialogOpen, , openPolicyDialog, closePolicyDialog] = useToggle()

  return (
    <>
      <div className="text-xs opacity-60 mt-6 cursor-pointer hover:underline" onClick={openPolicyDialog}>
        Отправляя заявку вы даете согласие на обработку <br />
        ваших персональных данных
      </div>

      <DialogPolicy isOpen={policyDialogOpen} onClose={closePolicyDialog} />
    </>
  )
}
