//Import  css
import './ReportsCard.css';
import ReportCard from './ReportCard/ReportCard';

//Import Badge
import { Sorts } from '../../Sorts/Sorts';

import { Filters } from '../../Filters/Filters';

import axios from 'axios';
import {Component, h} from 'preact';

const sortlist = ["User", "Date", "Time", "Location", "Status"];

const filterslist = ["All", "Voiture", "Dechet", "Graffiti", "Egout", "Autre"];

export class ReportsCard extends Component<{},{reports: any[]}> {

    componentDidMount() {
        axios.get(`http://ec2-35-181-61-215.eu-west-3.compute.amazonaws.com:8001/api/reports/`, {timeout: 5000})
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

                <Filters list={filterslist}></Filters>

                <Sorts list={sortlist} />

                <div className='reports'>
                    { (this.state.reports) ? (this.state.reports.map(report => {
                        return <ReportCard username="Undefined"
                                           date={report.created}
                                           time={report.created}
                                           address={report.location_link.latitude.toString()}
                                           status={report.status}
                                           type={report.type} />
                    })) : (<div class="lds-ripple"></div>)
                    }

                </div>
            </div>
        )
    }

}