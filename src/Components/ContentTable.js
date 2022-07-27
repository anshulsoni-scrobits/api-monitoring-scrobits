import React, { useEffect, useState } from "react";
import SearchIcon from '../Images/SearchIcon.svg';
import LeftArrow from '../Images/LeftArrow.svg';
import RightArrow from '../Images/RightArrow.svg';
import MaterialTable from 'material-table';

export default function ContentTable() {

  const [search, setSearch] = useState("")
  const [project, setProject] = useState([])
  const url = "https://api-monitor.scrobits.com/api/v1/users/projects/8";
  useEffect(() => {
    fetch(url, { method: 'get', 'Content-Type': 'application/json' })
      .then(async (data) => {
        const response = await data.json();
        setProject(response.projects);
        console.log(response);
      })
      .catch((ERR) => {
        console.log(ERR);
      })
  }, [])

  return (
    <div className='ContentTable' >
      <div className="Container">
        <img className='SearchIcon' src={SearchIcon} />
        <input type="text" placeholder="Search project " className="Search" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <table className='Table'>
        <thead>
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
        </thead>
        {project.filter((val) => 
          { for (let i=0;i<8;i++)
            {
              return val;
            }
        }).map((val, key) => {
          return (
            <>
              <tbody>
                <tr key={key}>
                  <td><center>{val.id}</center></td>
                  <td><center>{val.name}</center></td>
                  <td><center>{val.server_url}</center></td>
                  <td><center>{val.SSLExp}</center></td>
                  <td><center>{val.updated_at}</center></td>
                  <td><center>{val.Resptime}</center></td>
                  <td><center>{val.status}</center></td>
                  <td><center>{val.Details}</center></td>
                  <td></td>
                </tr>
                <td></td>
                {/* <button type="button" id="LeftButton"> <img src={LeftArrow}></img></button>
              <button type="button" id="RightButton"> <img src={RightArrow}></img></button> */}
              </tbody>
            </>
          )
        })}
      </table>
    </div>
  )
}

