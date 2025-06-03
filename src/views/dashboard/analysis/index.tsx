import GridCard from './components/GridCard'
import SiteAnalysis from './components/SiteAnalysis'
import VisitRadar from './components/VisitRadar'
import VisitSource from './components/VisitSource'
import SalesProductPie from './components/SalesProductPie'
const Analysis: React.FC = () => {
  return (
    <div>
      <GridCard />
      <SiteAnalysis />
      <div className="mt-2.5 grid grid-cols-3 gap-2.5">
        <VisitRadar />
        <VisitSource />
        <SalesProductPie />
      </div>
    </div>
  )
}

export default Analysis
