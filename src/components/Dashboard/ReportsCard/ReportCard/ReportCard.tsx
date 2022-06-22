//Import  css
import { Component } from 'react';
import './ReportCard.css';

import { ReportBlueSvg } from './reportcolor/ReportBlueSvg';
import { ReportGreenSvg } from './reportcolor/ReportGreenSvg';
import {ReportYellowSvg} from "./reportcolor/ReportYellowSvg";
import {ReportCyanSvg} from "./reportcolor/ReportCyanSvg";
import {ReportDymogoColorSvg} from "./reportcolor/ReportDymogoColorSvg";
import {ReportGreySvg} from "./reportcolor/ReportGreySvg";
import axios from "axios";
import {varenvconst} from "../../../../constants";


interface IReportCard {
  username: string;
  date: Date;
  time: Date;
  address: string;
  status: string;
  type: string;
  uuid: string;
}

// toggle class to expand the ReportCard
const expand = async (e: any) => {
    let element = e.currentTarget
    element.classList.toggle('expand');
    let image = await getImage(e.currentTarget.id)
    element.querySelector('img').src = "data:image/png;base64, " + image;
}

// get image by uuid
const getImage = async (uuid: string) => {

    return await axios.get(`${varenvconst.APIGATEWAY}user/get_image_report_by_uuid/${uuid}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      return res.request.response;
    }).catch(e => {
        return e;
    })

}

const changeStatus = async (e: any) => {

    console.log(e.currentTarget.id, typeof e.currentTarget.id)
    console.log(e.currentTarget.value, typeof e.currentTarget.value)

    return await axios.put(`${varenvconst.APIGATEWAY}user/update_report_status/${e.currentTarget.id}`, {
        "Headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        "Body": {
            "status": e.currentTarget.value
        }
    }).then(res => {
        console.log(res)
        return res;
    }).catch(
        e => {
            console.log(e)
            return e;
        }
    )


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
      uuid: props.uuid,
    }
  }


  render() {
    return (
        <>
          <div className='ReportCard' id={this.state.uuid} onClick={expand} >

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
                  <select className="status" onChange={changeStatus} id={this.state.uuid}>
                      <option value={this.state.status}>{this.state.status}</option>
                      <option value="In progress">In progress</option>
                      <option value="Resolved">Resolved</option>
                  </select>
              </div>
              {
                (this.state.type === "voiture") ? (<ReportBlueSvg />) : (this.state.type === "autre") ? (<ReportYellowSvg />) : (this.state.type === "dechet") ? (<ReportCyanSvg />) : (this.state.type === "egout") ? (<ReportGreenSvg />) : (this.state.type === "graffiti") ? (<ReportDymogoColorSvg />) : (<ReportGreySvg />)
              }
            </div>

            <div className="bottom">
              <div className="imagereport">
                <img src=""/>
              </div>
            </div>

          </div>
        </>
    )
  }

}