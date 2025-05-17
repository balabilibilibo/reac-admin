import { Layout } from 'antd'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'

const LayoutCon: React.FC = () => {
  return (
    <Layout className="h-full">
      <Sider />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  )
}

export default LayoutCon
