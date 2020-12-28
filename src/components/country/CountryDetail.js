import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { saveCountryData } from '../../redux/actions/countryActions';
import { Button, message } from 'antd';


const CountryDetail = () => {
    const dispatch = useDispatch();
    const {selectedCountry} = useSelector(state => state.countryReducer)
    const {name, languages} = selectedCountry;


    //notification 
    const key = 'updatable';
    const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    };
    const success =() => {
        message.success({ content: 'Posted successfully!', key, duration: 2 });
    }
    const failure =() => {
        message.success({ content: 'failed to post!', key, duration: 2 });
    }

    const handleSaveCountry = () =>{
        const body ={
            country: name,
            language: languages[0].name
        }
        console.log('required country object', body)
        dispatch(saveCountryData(body, openMessage, success, failure))
        openMessage()

    }




    return (
        <>
            <div className="country__detail--title">Your Choosen Country</div>
            <div  className="country__detail--info"><strong>Name: </strong> {name}</div>
            <div  className="country__detail--info"><strong>Languadge: </strong>{languages && languages[0]?.name} </div>
            <Button className="country__detail--button" type="primary" onClick={()=>handleSaveCountry()} >Save</Button>
        </>
    )
}

export default CountryDetail
