import { BrowserRouter , Route,Routes,Link, useParams } from "react-router-dom";

import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import {GetTestsByComboReducer} from '../reducers/TestsReducer'
import {GetComboTestsAction} from '../actions/TestsAction'
import CircularStatic from "../components/loading";
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'; 


import React from 'react'
import GridTests from "./GridTests";
import { ThreeBoxSkeleton } from "../components/BundleLoading";

export const ComboTests = () => {

    const getalltests = useSelector(state=> state.GetTestsByComboReducer )
    const {tests , loading , error} = getalltests

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetComboTestsAction())
    } , [] )


    return(
        <div>
          

          {loading && ( <ThreeBoxSkeleton />)}
            <div className='grid-3'>
            {tests && (tests.slice(0,3).map(i=>{
                return <p> 
                      <a href={`test/${i._id}`} style={{textDecoration:'none'}} >  
            <p> 
            <GridTests i={i} />
            </p>
            </a>
                     </p>
            }))}
            
</div>
           
        </div>
    )
}

export default ComboTests