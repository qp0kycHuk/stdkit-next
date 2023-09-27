import { Dialog } from '@/ui'

type IProps = IDialogProps

export function DialogSuccess({ ...props }: IProps) {
  return (
    <Dialog {...props} className="max-w-max">
      <div className="dialog-small card mx-auto">
        <div className="card-content py-8">
          <svg
            className="mx-auto"
            width="126"
            height="126"
            viewBox="0 0 126 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="63" cy="63" r="61" stroke="#219653" strokeWidth="4" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53.625 74.355L82.6653 44.9275C83.8857 43.6908 85.8643 43.6908 87.0847 44.9275C88.3051 46.1642 88.3051 48.1692 87.0847 49.4058L55.8347 81.0725C54.6143 82.3092 52.6357 82.3092 51.4153 81.0725L38.9153 68.4058C37.6949 67.1692 37.6949 65.1642 38.9153 63.9275C40.1357 62.6908 42.1143 62.6908 43.3347 63.9275L53.625 74.355Z"
              fill="#219653"
            />
          </svg>
          <div className="text-2.5xl font-semibold text-center mt-4 w-full">Заявка успешно отправлена</div>
        </div>
      </div>
    </Dialog>
  )
}
