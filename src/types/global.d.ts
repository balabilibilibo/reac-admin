export {}
declare global {
  const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      author: {
        name: string
        email: string
        url: string
      }
      dependencies: Record<string, string>
      devDependencies: Record<string, string>
    }
  }

  interface Window {
    initialize?: () => void
    BMapGL?: any // 如果你也用到了 BMapGL，也可以加上
  }
}
