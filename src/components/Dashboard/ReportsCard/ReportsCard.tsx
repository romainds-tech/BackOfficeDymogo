//Import  css
import './ReportsCard.css';
import { ReportCard } from './ReportCard/ReportCard';

export function ReportsCard() {
    return (
      <>
        <div className='ReportsCard'>
          <div className='bigTitle'>Reports</div>
          <div className='filters'>Filters : </div>

          <ReportCard />
          <ReportCard />
          <ReportCard />

        </div>
      </>
    )
  }