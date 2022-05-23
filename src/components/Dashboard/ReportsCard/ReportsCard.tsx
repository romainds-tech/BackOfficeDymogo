//Import  css
import './ReportsCard.css';
import ReportCard from './ReportCard/ReportCard';

//Import Badge
import {Sorts} from '../../Sorts/Sorts';

import {Filters} from '../../Filters/Filters';

import axios from 'axios';
import {useEffect, useState} from "react";
import {varenvconst} from "../../../constants";


const sortlist = ["User", "Date", "Time", "Location", "Status"];

const filtreslist = ["All", "Voiture", "Dechet", "Graffiti", "Egout", "Autre"];

interface IReport{
    uuid: string;
    created: string;
    time: string;
    location_link: {
        address: string;
    };
    status: string;
    type: string;
    username: string;
}

export function ReportsCard(){

    const [reports, setReports] = useState([]);

    const getReports = () => {

        axios.get(`${varenvconst.MICROSERVICEUSER}/get_all_report`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {

            console.log(res)
            console.log(JSON.parse(res.request.response))
            let results = JSON.parse(res.request.response)
            //invert results
            setReports(results.reverse())
        }).catch(err => {
            console.log(err)
            console.log(localStorage.getItem('token'))
            setReports([])
        })
    }

    useEffect(() => {
        getReports()
    }, [])

    // function to filter reports by type on click
    function filterReports(type: string){
        console.log("hello")
    }

        return (
            <div className='ReportsCard'>
                <div className='bigTitle'>Reports</div>

                <Filters mylist={filtreslist} />
                <Sorts list={sortlist}/>

                <div className='reports'>
                    {(reports != []) ? reports.map((report: IReport, index) => {
                        return <ReportCard key={report.uuid} date={report.created} time={report.created}
                                           address={report.location_link.adress} status={report.status}
                                           type={report.type} username='Undefined'/>

                    }) : <div className="lds-ripple">
                        <div></div>
                    </div>}

                </div>
            </div>
        )

}