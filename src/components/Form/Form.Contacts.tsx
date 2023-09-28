import React from 'react'
import { getMaskedPhoneValue } from '@/utils/helpers/phoneMask'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'

export function Contacts({ source, register, setValue }: IProps) {
  return (
    <>
      <label className="form-field">
        <div className="text-lg font-medium mb-2">Ваше имя</div>
        <div className="form-input-cover">
          <input type="text" className="form-input" required {...register('name')} />
        </div>
      </label>
      <label className="form-field mt-5">
        <div className="text-lg font-medium mb-2">Ваш телефон</div>
        <div className="form-input-cover">
          <input
            type="tel"
            className="form-input"
            placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
            {...register('phone')}
            onChange={(e) => setValue('phone', getMaskedPhoneValue(e.target.value))}
            required
          />
        </div>
      </label>
      <input type="text" className="hidden" hidden value={source} {...register('form')} />
    </>
  )
}

type IProps = {
  source?: string
  onSuccess?(): void
  register: UseFormRegister<Inputs>
  setValue: UseFormSetValue<Inputs>
}

type Inputs = any & { name: string; phone: string; form: string }
