import WorkbenchHeader from './components/WorkbenchHeader'
import ProjectCard from './components/ProjectCard'
import DynamicInfo from './components/DynamicInfo'
import QuickNav from './components/QuickNav'
import WorkbenchImg from './components/WorkbenchImg'
import SaleRadar from './components/SaleRadar'

const Workbench: React.FC = () => {
  return (
    <div>
      <WorkbenchHeader />
      <div className="mt-2.5 flex">
        <div className="w-7/10 mr-2.5">
          <ProjectCard />
          <DynamicInfo />
        </div>
        <div className="w-3/10">
          <QuickNav />
          <WorkbenchImg />
          <SaleRadar />
        </div>
      </div>
    </div>
  )
}

export default Workbench
