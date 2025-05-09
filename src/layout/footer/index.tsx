import { Layout } from 'antd'

const Footer: React.FC = () => {
  return (
    <Layout.Footer className='text-center  bg-white'>
      <div> React Admin ©{new Date().getFullYear()} Created by Balabilibo</div>
    </Layout.Footer>
  )
}

export default Footer
