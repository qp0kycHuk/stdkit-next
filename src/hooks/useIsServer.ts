import { useEffect, useState } from 'react'

export function useIsServer() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false)

  useEffect(() => {
    // Updating a state causes a re-render
    setInitialRenderComplete(true)
  }, [])

  return !initialRenderComplete
}
