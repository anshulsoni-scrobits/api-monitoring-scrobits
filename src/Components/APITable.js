import React from 'react'
import DataTable from 'react-data-table-component'
const APITable = () => {

    const columns=[
        {
            name:'Sr.No'
        },
        {
            name:'Project'
        },
        {
            name:'Server Address'
        },
        {
            name:'SSL Exp'
        },
        {
            name:'Last Updated'
        },
        {
            name:'Resp time'
        },
        {
            name:'Status'
        },
        {
            name:''
        }
    ]
  return (
    <DataTable/>
  )
}

export default APITable