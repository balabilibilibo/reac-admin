import { Layout } from 'antd'

const Footer: React.FC = () => {
  return (
    <Layout.Footer className="bg-white text-center dark:bg-[#141414]">
      <div> React Admin ©{new Date().getFullYear()} Created by Balabilibo</div>
    </Layout.Footer>
  )
}

export default Footer
