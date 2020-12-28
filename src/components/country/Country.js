import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DataTable from './DataTable';
import './country.css';
import CountryDetail from './CountryDetail';

const Country = () => {
    const dispatch = useDispatch();
    return (
        <div className="country">
            <div className="country__data-table">
                <DataTable />
            </div>
            <div className="country__detail">
                <CountryDetail />
            </div>
        </div>
    )
}

export default Country
