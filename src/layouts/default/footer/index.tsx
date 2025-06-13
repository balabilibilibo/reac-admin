import { getGlobEnv } from '@/utils/env'
import { Layout } from 'antd'

const Footer: React.FC = () => {
  const { pkg } = __APP_INFO__
  const { author } = pkg
  const { title } = getGlobEnv()
  return (
    <Layout.Footer className="bg-white text-center dark:bg-[#141414]">
      <div>
        {title} ©{new Date().getFullYear()} Created By {author.name}
      </div>
    </Layout.Footer>
  )
}

export default Footer
