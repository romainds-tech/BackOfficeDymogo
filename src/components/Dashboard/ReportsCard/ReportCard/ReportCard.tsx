//Import  css
import { Component } from 'react';
import './ReportCard.css';

import { ReportBlueSvg } from './reportcolor/ReportBlueSvg';
import { ReportGreenSvg } from './reportcolor/ReportGreenSvg';
import {ReportYellowSvg} from "./reportcolor/ReportYellowSvg";
import {ReportCyanSvg} from "./reportcolor/ReportCyanSvg";
import {ReportDymogoColorSvg} from "./reportcolor/ReportDymogoColorSvg";
import {ReportGreySvg} from "./reportcolor/ReportGreySvg";

interface IReportCard {
  username: string;
  date: Date;
  time: Date;
  address: string;
  status: string;
  type: string;
}

// toggle class to expand the ReportCard
const expand = (e: any) => {
    console.log(e.currentTarget)
    e.currentTarget.classList.toggle('expand');
}


export default class ReportCard extends Component<IReportCard, IReportCard>  {


  constructor(props: IReportCard) {
    super(props);
    this.state = {
      username: props.username,
      date: props.date,
      time: props.time,
      address: props.address,
      status: props.status,
      type: props.type,
    }
  }


  render() {
    return (
        <>
          <div className='ReportCard' onClick={expand} >

            <div className="top">
              <div className='blocktext'>
                <div className='username'>{this.state.username}</div>
              </div>

              <div className='blocktext'>
                <div className='date'>{new Date(this.state.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
              </div>

              <div className='blocktext'>
                <div className='time'>{new Date(this.state.time).toLocaleTimeString('fr-FR')}</div>
              </div>

              <div className='blocktext'>
                <div className='address'>{this.state.address}</div>
              </div>

              <div className='blocktext'>
                <div className='status'>{this.state.status}</div>
              </div>
              {
                (this.state.type === "voiture") ? (<ReportBlueSvg />) : (this.state.type === "autre") ? (<ReportYellowSvg />) : (this.state.type === "dechet") ? (<ReportCyanSvg />) : (this.state.type === "egout") ? (<ReportGreenSvg />) : (this.state.type === "graffiti") ? (<ReportDymogoColorSvg />) : (<ReportGreySvg />)
              }
            </div>

            <div className="bottom">

            </div>





          </div>
        </>
    )
  }

}