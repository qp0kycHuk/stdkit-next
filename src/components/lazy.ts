import { lazy } from 'react'

export const DialogForm = lazy(() => import('@/components/DialogForm').then((m) => ({ default: m.DialogForm })))
