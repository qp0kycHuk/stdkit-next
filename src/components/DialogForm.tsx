import { Dialog } from '@/ui'
import { DialogPolicy } from './DialogPolicy'
import { useToggle } from '@/hooks/useToggle'
import axios from 'axios'
import { DialogSuccess } from './DialogSuccess'
import { useForm } from 'react-hook-form'
import { PhoneInput } from '@/ui/components/PhoneInput'
import { getMaskedPhoneValue } from '@/utils/helpers/phoneMask'
import { Policy } from './Form/Form.Policy'
import { Contacts } from './Form/Form.Contacts'
import Image from 'next/image'

type IFormDialogProps = IDialogProps & {
  source?: string
}

type Inputs = {
  name: string
  phone: string
  form: string
}

export function DialogForm({ source, ...props }: IFormDialogProps) {
  const [successDialogOpen, , openSuccessDialog, closeSuccessDialog] = useToggle()
  const [loading, , loadingStart, loadingEnd] = useToggle()

  const { register, handleSubmit, reset, setValue } = useForm<Inputs>()

  async function submitHandler(data: Inputs) {
    loadingStart()

    await axios.post('/api/submit', data)

    loadingEnd()
    props.onClose()
    openSuccessDialog()
    reset()
  }

  return (
    <>
      <Dialog {...props} className="max-w-max">
        <div className="dialog-form">
          <div className="dialog-form__img">
            <Image width={400} height={400} src="/img/dialog-form.jpg" alt="" className="w-full" />
          </div>
          <form onSubmit={handleSubmit(submitHandler)} className="dialog-form__content">
            <div className="dialog-form__title">Давайте поговорим</div>

            <Contacts register={register} setValue={setValue} />

            <button className="dialog-form__btn btn btn--text btn--contur mt-9" disabled={loading}>
              Отправить
            </button>
            <Policy />
          </form>
        </div>
      </Dialog>

      <DialogSuccess isOpen={successDialogOpen} onClose={closeSuccessDialog} />
    </>
  )
}
