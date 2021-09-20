import React from 'react';
import { useAsyncDebounce } from "react-table";
import './index.css'

const GlobalFilter = ({ globalFilter, setGlobalFilter}) => {

    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <div className='search-div'>
            Search:{' '}
            <input
                value={value || ""}
                onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
                }}
                placeholder='Search'
            />
        </div>
    )
}

export default GlobalFilter
