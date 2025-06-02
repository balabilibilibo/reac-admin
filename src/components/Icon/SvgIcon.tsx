interface Props {
  prefix?: string
  icon: string
  size: number
  color?: string
}

export function SvgIcon(props: Props) {
  const { icon, prefix = 'icon', size } = props
  const style = {
    width: size + 'px',
    height: size + 'px'
  }
  const symbolId = `#${prefix}-${icon}`
  return (
    <svg className="h-[1em] w-[1em] overflow-hidden fill-current align-[-0.15em]" style={style} aria-hidden="true">
      <use xlinkHref={symbolId}></use>
    </svg>
  )
}
