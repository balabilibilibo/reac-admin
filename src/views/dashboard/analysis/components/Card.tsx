import { Icon } from '@iconify/react'

interface Props {
  title: string
  icon: string
  value: number
  total: number
}
export function Card(props: Props) {
  const { title, icon, value, total } = props
  return (
    <div className="rounded-lg border border-[#e4e4e7] bg-white p-4 dark:border-[#36363a] dark:bg-[#141414]">
      <div className="text-xl font-bold">{title}</div>
      <div className="my-4 flex justify-between">
        <span className="text-lg">{value}</span>
        <Icon icon={icon} className="text-3xl" />
      </div>
      <div className="flex justify-between">
        <span>总{title}</span>
        <span>{total}</span>
      </div>
    </div>
  )
}
