//Import  css
import './ReportCard.css';

interface IReportCard {
  username: string;
  date: string;
  time: string;
  address: string;
  status: string;
}

export function ReportCard(props: IReportCard): JSX.Element {
  function openCard(){
    console.log("Open card");
  }
    return (
      <>
        <div className='ReportCard' onClick={openCard} >

              <div className='blocktext'>
                <div className='username'>{props.username}</div>
              </div>

              <div className='blocktext'>
                <div className='date'>{props.date}</div>
              </div>

              <div className='blocktext'>
                <div className='time'>{props.time}</div>
              </div>

              <div className='blocktext'>
                <div className='address'>{props.address}</div>
              </div>

              <div className='blocktext'>
                <div className='status'>{props.status}</div>
              </div>
                
        </div>
      </>
    )
  }