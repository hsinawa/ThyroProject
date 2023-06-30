import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllContactsAdmin } from '../actions/contactAction'
import {GetAllContactsReducer} from '../reducers/contactReducer'

const ContactScreenAdmin = () => {

const dispatch = useDispatch()
    useEffect ( ()=>{
dispatch(GetAllContactsAdmin())
    } , [dispatch] ) 

    const {loading, contacts, error} = useSelector(state=>state.GetAllContactsReducer)
    
    return(
        <div>
            <h3>Admin Contact Screen</h3>


{error&&(<p style={{color:'red'}} >Error is : {error} </p>)}

<table class="table">
        <thead>
          <tr>
            <th>Name</th>
            
            <th>Contact Details</th>
            <th>Message</th>

            <th>Date</th>
           
          </tr>
        </thead>
        {loading && <CircularProgress />}

        {contacts &&
          contacts.map((i) => {
            return (
              <tr>
                <td data-label="Name"> {i.name} </td>
                <td data-label="Contact Details"> {i.contactDetails} </td>
                <td data-label="Message"> {i.message} </td>
                <td data-label="Date"> {i.createdAt.substr(0,10)} </td>
                

           
              </tr>
            );
          })}
      </table>

        </div>
    )
}

export default ContactScreenAdmin