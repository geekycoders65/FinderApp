import React,{ useMemo } from 'react'
import { useTable } from 'react-table'
//import MOCK_DATA from './MOCK_DATA.json'
import i1 from './i1.json'
import {COLUMNS  } from './column'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'


export const Table = () => {
       
    const columns = useMemo(() => COLUMNS,[])
    const data = useMemo(() => i1, [])
    

    const tableInstance = useTable(
        {
            columns,
            data
        }
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = tableInstance
 
    
    return(
        <div>
      <Navbar></Navbar>
        
        <table {...getTableProps()}>
           
            <thead>
                {headerGroups.map((headerGroup)=>(
               <tr {...headerGroup.getHeaderGroupProps()}>
                   {
                       headerGroup.headers.map(column=>(
                           <th {...column.getHeaderProps()}>{column.render('Header')}
                               </th>
                       ))
                   }
                   
               </tr>
                     
                ))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row)=>{
                       prepareRow(row)
                       return(
                          <tr {...row.getRowProps()}>
                              {
                                 
                                  row.cells.map((cell )=>{
                                  return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                  })}
                          
                          </tr>
                       )
                    }) }
              
            </tbody>
   
         </table>
         <Footer/>
         </div>
      
       )
                  
   }
   export default Table      