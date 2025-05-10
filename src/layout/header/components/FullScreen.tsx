import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { useFullscreen } from 'ahooks'

const FullScreen: React.FC = () => {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(
    () => document.documentElement
  )

  return (
    <Tooltip placement='bottom' title={isFullscreen ? '退出全屏' : '全屏'}>
      <div className='cursor-pointer' onClick={toggleFullscreen}>
        {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      </div>
    </Tooltip>
  )
}

export default FullScreen
