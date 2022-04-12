//Import  css
import './ReportsCard.css';
import { ReportCard } from './ReportCard/ReportCard';

//Import Badge
import { Filters } from '../../Filters/Filters';

const itemlist = ["User", "Date", "Time", "Location", "Status"];

export function ReportsCard() {
    return (
      <>
        <div className='ReportsCard'>
          <div className='bigTitle'>Reports</div>


          <Filters list={itemlist} />

            

          <ReportCard username='Gauthier Mauche #4325' date='12/03/2022' time='12:24:55' address='6 avenue de Genève 74000, Annecy' status='In progress' />
          <ReportCard username='Gauthier Mauche #4325' date='12/03/2022' time='12:24:55' address='6 avenue de Genève 74000, Annecy' status='In progress' />
          <ReportCard username='Gauthier Mauche #4325' date='12/03/2022' time='12:24:55' address='6 avenue de Genève 74000, Annecy' status='In progress' />

        </div>
      </>
    )
  }