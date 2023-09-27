export function MaskedInput({ getMaskedValue, isComplete, ...props }: IMaskedInputProps) {
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const maskedValue = getMaskedValue(event.currentTarget.value)

    event.currentTarget.value = maskedValue
    props?.onChange?.(event)
  }

  function blurHandler(event: React.FocusEvent<HTMLInputElement>) {
    if (!isComplete(event.currentTarget.value) && event.currentTarget.value !== '') {
      event.currentTarget.value = ''
      props?.onChange?.(event)

      event.currentTarget.focus()
      event.currentTarget.blur()
    }

    props?.onBlur?.(event)
  }

  return (
    <input
      {...props}
      defaultValue={getMaskedValue((props?.value || props?.defaultValue || '').toString())}
      onChange={changeHandler}
      onBlur={blurHandler}
    />
  )
}

interface IMaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  getMaskedValue: (s: string) => string
  isComplete: (s: string) => boolean
}
