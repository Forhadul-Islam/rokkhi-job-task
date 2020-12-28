import {LOAD_ALL_COUNTY_DATA,LOAD_SINGLE_COUNTRY} from '../types';

const INITIAL_STATE = {
    countries: [],
    selectedCountry: {}
}


const countryReducer = (state=INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOAD_ALL_COUNTY_DATA:
            return {
                ...state,
                countries: payload
            }

        case LOAD_SINGLE_COUNTRY:
            return {
                ...state,
                selectedCountry: payload
            }
    
        default:
            return {
                ...state
            };
    }
}


export default countryReducer;