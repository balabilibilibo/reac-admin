import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { useFullscreen } from 'ahooks'
import { useState } from 'react'

const FullScreen: React.FC = () => {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(() => document.documentElement)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    toggleFullscreen()
    setIsOpen(false)
  }

  return (
    <Tooltip placement="bottom" open={isOpen} title={isFullscreen ? '退出全屏' : '全屏'} onOpenChange={setIsOpen}>
      <div
        className="dark:hover-bg-white/10 flex h-8 w-8 cursor-pointer justify-center rounded px-3 hover:bg-black/5"
        onClick={handleClick}
      >
        {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      </div>
    </Tooltip>
  )
}

export default FullScreen
