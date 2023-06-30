import { Button, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { GetAllValidBlogAction } from '../actions/BlogAction'
import CircularStatic from '../components/loading';
import {GetAllBlogsReducer} from '../reducers/BlogReducers';
import BlogCard from './blogCard';



const AllBlogsScreen = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetAllValidBlogAction())
    },[])

    const {loading,blogs,error} = useSelector(state=>state.GetAllBlogsReducer) 


    const [SearchTerm, setSearchTerm] = React.useState("");
    const [visible, setVisible] = React.useState(10);
    
    const loadMore = () => {
      setVisible((prev) => prev + 10);
    };
    return(
        <div>

{loading && <CircularStatic />}
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

      {blogs && (
        <div className="grid-3" style={{boxShadow:'none'}} >
          {blogs
            .slice(0, visible)
            .filter((val) => {
              if (SearchTerm == "") {
                return val;
              } else if (
                val.heading.toLowerCase().includes(SearchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((i) => {
              return (
                <p style={{boxShadow:'none'}}>
                 
                    <Link to={`/blogs/${i._id}`} style={{textDecoration:'none'}}  ><BlogCard blogdata={i} /></Link> 
                 
                </p>
              );
            })}
        </div>
      )}

      {blogs && visible < blogs.length && (
        <Button onClick={loadMore} type="button" variant="contained">
          Load more
        </Button>
      )}
            
        </div>
    )
}

export default AllBlogsScreen