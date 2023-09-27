import { Dialog } from '@/ui'
import { DialogPolicy } from './DialogPolicy'
import { useToggle } from '@/hooks/useToggle'
import axios from 'axios'
import { DialogSuccess } from './DialogSuccess'

type IFormDialogProps = IDialogProps & {
  source?: string
}

export function DialogForm({ ...props }: IFormDialogProps) {
  const [policyDialogOpen, , openPolicyDialog, closePolicyDialog] = useToggle()
  const [successDialogOpen, , openSuccessDialog, closeSuccessDialog] = useToggle()
  const [loading, , loadingStart, loadingEnd] = useToggle()

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    loadingStart()

    const { data } = await axios.post('/api/submit', formData)

    loadingEnd()
    props.onClose()
    openSuccessDialog()
  }

  return (
    <>
      <Dialog {...props} className="max-w-max">
        <div className="dialog-form">
          <div className="dialog-form__img">
            <img src="img/dialog-form.jpg" alt="" />
          </div>
          <form onSubmit={submitHandler} className="dialog-form__content">
            <div className="dialog-form__title">Давайте поговорим</div>
            <label className="form-field">
              <div className="text-lg font-medium mb-2">Ваше имя</div>
              <div className="form-input-cover">
                <input type="text" className="form-input" required name="name" />
              </div>
            </label>
            <label className="form-field mt-5">
              <div className="text-lg font-medium mb-2">Ваш телефон</div>
              <div className="form-input-cover">
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                  name="phone"
                  required
                />
              </div>
            </label>
            <button className="dialog-form__btn btn btn--text btn--contur mt-9" disabled={loading}>
              Отправить
            </button>
            <div className="text-xs opacity-60 mt-6 cursor-pointer hover:underline" onClick={openPolicyDialog}>
              Отправляя заявку вы даете согласие на обработку <br />
              ваших персональных данных
            </div>
          </form>
        </div>
        <DialogPolicy isOpen={policyDialogOpen} onClose={closePolicyDialog} />
      </Dialog>

      <DialogSuccess isOpen={successDialogOpen} onClose={closeSuccessDialog} />
    </>
  )
}
