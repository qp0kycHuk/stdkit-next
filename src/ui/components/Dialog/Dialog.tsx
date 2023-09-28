import { Transition, Dialog as DialogWrap } from '@headlessui/react'
import classnames from 'classnames'
import { Fragment } from 'react'

export function Dialog({ children, isOpen, className, onClose }: IDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <DialogWrap as="div" className="relative z-8" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-5"
              enterTo="opacity-100 "
              leave="ease-in duration-200"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0 scale-95 translate-y-5"
            >
              <DialogWrap.Panel
                className={classnames(
                  className,
                  'w-full m-auto transition-all relative bg-white shadow-xl rounded-2xl overflow-hidden'
                )}
              >
                <div className="fixed -z-1" tabIndex={0}></div>
                <button className=" btn rounded-none btn-icon btn--text absolute right-0 top-0" onClick={onClose}>
                  <svg className="icon text-xs">
                    <use xlinkHref="/img/icons.svg#cross" />
                  </svg>
                </button>
                {children}
              </DialogWrap.Panel>
            </Transition.Child>
          </div>
        </div>
      </DialogWrap>
    </Transition>
  )
}
