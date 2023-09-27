import { ComponentProps } from 'react'
import { MaskedInput } from './MaskedInput'
import { getMaskedPhoneValue, isPhoneComplete } from '@/utils/helpers/phoneMask'

export function PhoneInput({ ...props }: IPhoneInputProps) {
  return <MaskedInput {...props} isComplete={isPhoneComplete} getMaskedValue={getMaskedPhoneValue} />
}

type IPhoneInputProps = React.InputHTMLAttributes<HTMLInputElement>
