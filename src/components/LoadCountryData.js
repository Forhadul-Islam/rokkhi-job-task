import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { loadAllCountyData } from '../redux/actions/countryActions';


const LoadCountryData = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadAllCountyData())
    }, [])
    return  <div />
}

export default LoadCountryData
