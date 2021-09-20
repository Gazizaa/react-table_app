import React from 'react';
import { useTable, usePagination, useRowSelect, useGlobalFilter } from "react-table";
import './index.css';
import { Checkbox } from '../Checkbox/index.js';
import GlobalFilter from '../GlobalFilter';


const Table = ({ columns, data }) => {
    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setGlobalFilter,
        prepareRow, 
        state: { pageIndex, globalFilter },
      } = useTable({
        columns,
        data,
        initialState: { 
            pageSize: 5, 
            selectedRowIds: {'1': true, '3': true, '6': true}, 
        }
      },
       useGlobalFilter,
       usePagination,
       useRowSelect,
       hooks => {
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <Checkbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            Cell: ({ row }) => (
              <div>
                <Checkbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ])
      } 
    ); 

    return (
        <>
          <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter}/>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                            {column.render("Header")}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                            </tr>
                        );
                        })}
                </tbody>
            </table>
            <div className='buttons'>
                <span> Page {' '}  
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
            </div>
        </>
    )
}

export default Table
