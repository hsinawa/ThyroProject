import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import {GetAllTestsReducer} from '../reducers/TestsReducer'
import {DeleteTestAction, GetAllTestsAction} from '../actions/TestsAction'
import CircularStatic from "../components/loading";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'; 
import './tests.css'
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export const AllTests = () => {

    const getalltests = useSelector(state=> state.GetAllTestsReducer )
    const {tests , loading , error} = getalltests

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(GetAllTestsAction())
    } , [] )

    const deleteTest = (id)=>{
        const r = window.confirm("Do you want to delete?");
        if (r == true) {
            dispatch(DeleteTestAction(id))
        } else {
          return;
        }
      
    }

    const [SearchTerm, setSearchTerm] = React.useState("");
    const [visible, setVisible] = React.useState(10);

    const loadMore = () => {
      setVisible((prev) => prev + 10);
    };

    return(
        <div>
           
           <a href='/admin/addtests' style={{color:'#95C5E4' , textDecoration:'none' }} >
       <p  >   <AddIcon/> Click Here to Add Test </p>
       </a>

       <TextField
        required
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        style={{ width: "100%" }}
        value={SearchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        style={{ width: "90%" }}
      />

       <table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Edit</th>
            
        </tr>
    </thead>
    {loading && ( <CircularStatic />)}
  
   
    {
           tests && (
               tests.slice(0, visible).filter((val) => {
                if (SearchTerm == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(SearchTerm.toLowerCase())
                ) {
                  return val;
                }
              }).map(i=>{
                 return <tr>
                         <td data-label='Name' > {i.name} </td>
                         <td data-label='Price' > {i.price} </td>
                         <td data-label='Category' > {i.category} </td>
                        
                         <td data-label='Delete' onClick={()=> deleteTest(i._id)} > <DeleteIcon /> </td>
                       
                         <td data-label='Edit' >   <Link to={`/admin/edittests/${i._id}`} ><EditIcon /></Link> </td>
                     </tr>
                
               })
           )
       }
         

    </table>
      
     

    {tests && visible < tests.length && (
        <Button onClick={loadMore} type="button" variant="contained">
          Load more
        </Button>
      )}      
        </div>
    )
}

export default AllTests 