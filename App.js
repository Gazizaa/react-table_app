import './App.css';
import Table from './Components/Table';
import axios from 'axios';
import { useMemo, useState, useEffect } from 'react'

function App() {

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

  const columns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id"
      },
      {
        Header: "More details",
        accessor: "Подробнее",
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
        accessor: "Delete"
      },
    ],
    []
  );


  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
