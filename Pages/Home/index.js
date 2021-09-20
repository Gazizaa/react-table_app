import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '../../Components/Table'

const Home = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setdata(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const deleteRow = (id) => {
        setdata(data.filter(item => item.id !== id))
    }

    const columns = useMemo(
        () => [
        {
            Header: "id",
            accessor: "id"
        },
        {
            Header: "More details",
            Cell: ({row}) => <Link to={`/users/${row.original.id}`}>More Details</Link>
        },
        {
            Header: "Username",
            accessor: "username"
        },
        {
            Header: "Email",
            accessor: "email"
        },
        {
            Header: "City",
            accessor: "address.city"
        },
        {
            Header: "Phone",
            accessor: "phone"
        },
        {
            Header: "Company Name",
            accessor: "company.name"
        },
        
        {
            Header: "Website",
            accessor: "website"
        },
        {
            Header: "Delete",
            Cell: ({row}) => <button className='delete-btn' onClick={() => deleteRow(row.original.id)}>x</button>
        },
        ],
        [data]
    );

    return (
        <div>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default Home
