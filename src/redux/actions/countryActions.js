import axios from "axios";
import API from "../../util/API";
import { LOAD_ALL_COUNTY_DATA, LOAD_SINGLE_COUNTRY } from "../types";

const options = {
    header: {'Content-Type': 'application/json'}
}

export const loadAllCountyData =  () => async dispatch =>{
    try {
       const url = "/all";
        const countryData = await API.get(url, options)
        const {data} = countryData;
        console.log(data)
        dispatch({type: LOAD_ALL_COUNTY_DATA, payload: countryData.data})
    } catch (err) {
        
    }
}

export const loadSingleCountry = (countryName) => async dispatch =>{
    try {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        const response = await API.get(url, options);
        const payload = response.data[0]
        dispatch({type: LOAD_SINGLE_COUNTRY, payload})
    } catch (err) {
        
    }
}


export const saveCountryData = (body, openMessage, success, failure) => async dispatch =>{
    try {
        const url = 'http://api.rokkhi.com:3000/idea';
       const response = await axios.post(url, body, options);
       success()
    } catch (err) {
        failure()
    }
}