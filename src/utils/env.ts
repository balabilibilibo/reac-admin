export function getGlobEnv() {
  const ENV = import.meta.env
  const { VITE_APP_TITLE } = ENV
  return {
    title: VITE_APP_TITLE
  }
}
