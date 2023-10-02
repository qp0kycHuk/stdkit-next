import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface IProps {
  delay?: number
  onStart?: () => void
  onComplete?: () => void
}

export function useRouteChangeHandler({ delay = 100, onStart, onComplete }: IProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  const handleStart = (url) => {
    url !== router.asPath && setLoading(true)
    onStart?.()
  }

  const handleComplete = () => {
    setTimeout(() => {
      setLoading(false)
      onComplete?.()
    }, delay)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  useEffect(() => {
    if (router.isReady) {
      handleComplete()
    }
  }, [router.isReady])

  return { loading }
}
