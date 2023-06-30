import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { GetTestsByCategoryAction } from '../actions/TestsAction';
import CircularStatic from '../components/loading';
import {GetTestCategoryReducer} from '../reducers/TestsReducer'
import GridTests from './GridTests';

export const TestCategory = () => {
    const dispatch = useDispatch()
    const { category } = useParams();
    const categorytype = category;
  
  useEffect( ()=>{
      dispatch(GetTestsByCategoryAction({categorytype}))
  } ,[])

  const {loading,tests,error,success} = useSelector(state=>state.GetTestCategoryReducer)

  const [SearchTerm , setSearchTerm] = useState('')

    return(
        <div>
            
            {loading && ( <CircularStatic />)}

    
            <TextField
                    required
                    id="outlined-basic" label="Search..." variant="outlined" style={{ width: '100%' }}
                    value={SearchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    style={{ width: '90%' }}
                />

            {tests&&(
                
                <div className='grid-3'>
                    {
    tests.filter( (val)=>{
        if(SearchTerm=='')
        {
            return val
        }
        else if( val.name.toLowerCase().includes(SearchTerm.toLowerCase()) )
        {
            return val
        }

    } ).map(i=>{
        return <p  >
            <a href={`test/${i._id}`} style={{textDecoration:'none'}} >  
            <p> 
            <GridTests i={i} />
            </p>
            </a>
            </p>
    })
                    }
            
                </div>
            )}


        </div>
    )
}

export default TestCategory