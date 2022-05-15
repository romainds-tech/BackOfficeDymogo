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
  date: string;
  time: string;
  address: string;
  status: string;
  type: string;
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
          <div className='ReportCard' >
            <div className='blocktext'>
              <div className='username'>{this.state.username}</div>
            </div>

            <div className='blocktext'>
              <div className='date'>{this.state.date.substring(0,10)}</div>
            </div>

            <div className='blocktext'>
              <div className='time'>{this.state.time.substring(11,19)}</div>
            </div>

            <div className='blocktext'>
              <div className='address'>{this.state.address.toString().substring(0,5)}</div>
            </div>

            <div className='blocktext'>
              <div className='status'>{this.state.status}</div>
            </div>
            {
              (this.state.type === "voiture") ? (<ReportBlueSvg />) : (this.state.type === "autre") ? (<ReportYellowSvg />) : (this.state.type === "dechet") ? (<ReportCyanSvg />) : (this.state.type === "egout") ? (<ReportGreenSvg />) : (this.state.type === "graffiti") ? (<ReportDymogoColorSvg />) : (<ReportGreySvg />)
            }

          </div>
        </>
    )
  }

}