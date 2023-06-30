import React from 'react'
import {useDispatch  } from 'react-redux'

//Material UI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteFromCart } from '../actions/CartAction';


export const CartContainer = ({i}) => {
    
    const dispatch = useDispatch()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        float:'right'
       
      }));


    return(
        <div>

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <a href={`/test/${i._id}`} style={{textDecoration:'none', color:'black', cursor:'pointer'}} >
         <h2 style={{color:'black'}} > {i.name} </h2>
         </a>
        </Grid>
          <Grid item xs={2}>
         <h4 style={{color:'#002D62'}} > Price: ₹{i.price} </h4>
        </Grid>
        
        <Grid item xs={8}>
        <p style={{color:'#313131'}} >E-Report Available in {i.reporttime} {i.duration} </p>
        </Grid>
        <Grid item xs={1.7} className='delete-grid' >
        <Item onClick={()=>{
            dispatch(DeleteFromCart(i))
        }} id='delete-icon' > <DeleteIcon  /> </Item>
        </Grid>
      
      </Grid>
    </Box>


            
        </div>
    )
}

export default CartContainer