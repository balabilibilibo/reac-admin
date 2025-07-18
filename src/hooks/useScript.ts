import { useEffect, useRef } from 'react'

interface ScriptOptions {
  src: string
}

export function useScript(options: ScriptOptions) {
  const { src } = options
  const promiseRef = useRef<Promise<any>>(null)
  const scriptRef = useRef<HTMLScriptElement>(null)
  useEffect(() => {
    if (!promiseRef.current) {
      promiseRef.current = new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = src
        document.head.appendChild(script)
        scriptRef.current = script
        script.onload = () => {
          resolve('')
        }
        script.onerror = (err) => {
          reject(err)
        }
      })
    }

    return () => {
      scriptRef.current && scriptRef.current.remove()
      scriptRef.current = null
    }
  }, [])

  return {
    toPromise: () => promiseRef.current
  }
}
