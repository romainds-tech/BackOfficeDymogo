//Import  css
import './ReportsCard.css';
import { ReportCard } from './ReportCard/ReportCard';

//Import Badge
import { Sorts } from '../../Sorts/Sorts';

import {v4 as uuidv4} from 'uuid';

import { useState } from 'preact/hooks';
import { Filters } from '../../Filters/Filters';

const sortlist = ["User", "Date", "Time", "Location", "Status"];

const filterslist = ["All", "Bad Park", "Waste", "Graffiti", "Sewer", "Other"];

export function ReportsCard() {

  //List of reports
  const reports = [
    {
      id: uuidv4(),
      username: "John Doe",
      date: "12/12/2020",
      time: "12:00",
      address: "123 Main St",
      status: "Pending",
      type: "Bad Park"
    },
    {
      id: uuidv4(),
      username: "John Doe",
      date: "12/12/2020",
      time: "12:00",
      address: "123 Main St",
      status: "Pending",
      type: "Sewer"
    },
    {
      id: uuidv4(),
      username: "John Doe",
      date: "12/12/2020",
      time: "12:00",
      address: "123 Main St",
      status: "Pending",
      type: "Bad Park"
    },
    {
      id: uuidv4(),
      username: "John Doe",
      date: "12/12/2020",
      time: "12:00",
      address: "123 Main St",
      status: "Pending",
      type: "Bad Park"
    },
    {
      id: uuidv4(),
      username: "John Doe",
      date: "12/12/2020",
      time: "12:00",
      address: "123 Main St",
      status: "Pending",
      type: "Bad Park"
    },
    {
      id: uuidv4(),
      username: "John Doe",
      date: "12/12/2020",
      time: "12:00",
      address: "123 Main St",
      status: "Pending",
      type: "Bad Park"
    },
    {
      id: uuidv4(),
      username: "John Doe",
      date: "12/12/2020",
      time: "12:00",
      address: "123 Main St",
      status: "Pending",
      type: "Bad Park"
    }
    ,
    {
      id: uuidv4(),
      username: "John Doe",
      date: "12/12/2020",
      time: "12:00",
      address: "123 Main St",
      status: "Pending",
      type: "Bad Park"
    }
    ,
    {
      id: uuidv4(),
      username: "John Doe",
      date: "12/12/2020",
      time: "12:00",
      address: "123 Main St",
      status: "Pending",
      type: "Bad Park"
    }
  ]


  

    return (
      <>
        <div className='ReportsCard'>
          <div className='bigTitle'>Reports</div>
          
          <Filters list={filterslist}></Filters>

          <Sorts list={sortlist} />

            
          <div className='reports'>
            
            {reports.map(report => (
              <ReportCard key={report.id} username={report.username} date={report.date} time={report.time} address={report.address} status={report.status} type={report.type} />
            ))}
          </div>
          

        </div>
      </>
    )
  }