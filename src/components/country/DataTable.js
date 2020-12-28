import { Space, Table, Tag } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadSingleCountry } from '../../redux/actions/countryActions';



const DataTable = () => {
    const dispatch = useDispatch();
    const {countries} = useSelector(state => state.countryReducer)

    const handleSelectCountry = e =>{
        const countryName = e.target.innerText;
        dispatch(loadSingleCountry(countryName))
    }

    const columns = [
        {
          title: 'Country Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a onClick={(e)=>handleSelectCountry(e)}>{text}</a>,
        },
        {
          title: 'Capital',
          dataIndex: 'capital',
          key: 'capital',
        }
      ];

      const data = countries.map(country =>(
          {
            key: country.numericCode,
            name: country.name,
            capital: country.capital
          }
      ))
      
    // const data = [
    //     {
    //       key: '1',
    //       name: 'John Brown',
    //       email: 'forhadul@gmail.com',
    //       phone: '01822235000',
    //       clearance: ['user'],
    //     }
    //   ];
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default DataTable
