//Import  css
import './ReportsCard.css';
import ReportCard from './ReportCard/ReportCard';

//Import Badge
import { Sorts } from '../../Sorts/Sorts';

import { Filters } from '../../Filters/Filters';

import axios from 'axios';
import {Component} from 'react';

const sortlist = ["User", "Date", "Time", "Location", "Status"];

const filtreslist = ["All", "Voiture", "Dechet", "Graffiti", "Egout", "Autre"];

export class ReportsCard extends Component<{},{reports: any[]}> {

    componentDidMount() {
        axios.get(`http://localhost:8001/api/reports/`, {timeout: 5000})
            .then(res => {
                let retrurnvalue = JSON.parse(res.request.response)
                console.log(retrurnvalue)
                return retrurnvalue
            }).then(data => {
            this.setState({
                reports: data
            });
        }).catch(err => {
            return err
        })
    }


    render() {
        return (
            <div className='ReportsCard'>
                <div className='bigTitle'>Reports</div>

                <Filters list={filtreslist}></Filters>
                <Sorts list={sortlist} />

                <div className='reports'>
                    { (this.state) ? this.state.reports.map((report, index) => {
                        return <ReportCard key={report.uuid} date={report.created} time={report.created} address={report.location_link.latitude} status={report.status} type={report.type} username='Undefined' />

                    }) : <div className="lds-ripple"><div></div></div>}

                </div>
            </div>
        )
    }

}