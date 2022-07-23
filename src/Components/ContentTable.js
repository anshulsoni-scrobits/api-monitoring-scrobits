import React from 'react'
import SearchIcon from '../Images/SearchIcon.svg';
import LeftArrow from  '../Images/LeftArrow.svg';
import RightArrow from '../Images/RightArrow.svg';

const data = [
  { SrNo: "1",Project:"Scrobits Dev", ServerAddress:"scrobitsDev.com", SSLExp:"in 2d",Lastupdated:"5 mins ago", Resptime:"500ms",Status:"Healthy",Details:"Link"},
]

export default function ContentTable() {
  return (
    <div className='ContentTable'>
     <div className="Container">
     <img className='SearchIcon' src={SearchIcon}/>
        <input type="text" placeholder="Search project " className="Search"></input>
     </div>
        
      <table className='Table'>
        <tr>
          <th className='columnName'><center>Sr.No</center></th>
          <th className='columnName'><center>Project</center></th>
          <th className='columnName'><center>Server Address</center></th>
          <th className='columnName'><center>SSL Exp</center></th>
          <th className='columnName'><center>Last updated</center></th>
          <th className='columnName'><center>Resp time</center></th>
          <th className='columnName'><center>Status</center></th>
          <th className='columnName'><center>Details</center></th>
        </tr>
        {data.map((val, key) => {
          return (
           <>
           <tr key={key}>
           <td><center>{val.SrNo}</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr className="EvenRow" key={key}>
            <td><center>{val.SrNo}</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr key={key}>
            <td><center>{val.SrNo}</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr className="EvenRow" key={key}>
            <td><center>{val.SrNo}</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr key={key}>
            <td><center>{val.SrNo}</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr className="EvenRow" key={key}>
            <td><center>{val.SrNo}</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr key={key}>
            <td><center>{val.SrNo}</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr className="EvenRow" key={key}>
            <td><center>{val.SrNo}</center></td>
              <td><center>{val.Project}</center></td>
              <td><center>{val.ServerAddress}</center></td>
              <td><center>{val.SSLExp}</center></td>
              <td><center>{val.Lastupdated}</center></td>
              <td><center>{val.Resptime}</center></td>
              <td><center>{val.Status}</center></td>
              <td><center>{val.Details}</center></td>
            </tr>
            <tr>
            <td></td>
            <button type="button" id="LeftButton"> <img src={LeftArrow}></img></button>
              <center><div id='PageOutOf'> page out of </div></center> 
              <button type="button" id="RightButton"> <img src={RightArrow}></img></button>
            </tr>
          </> 
          )
        })}
      </table>
     </div>
  )
}
