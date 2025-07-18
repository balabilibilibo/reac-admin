export function nextTick(callback?: () => void, delay?: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      callback?.()
      resolve()
    }, delay ?? 500)
  })
}
