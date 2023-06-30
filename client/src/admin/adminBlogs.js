import React, { useEffect } from 'react'
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from 'react-redux';
import { GetAllGetBlogAction } from '../actions/BlogAction';
import {GetAllBlogsReducer} from '../reducers/BlogReducers';
import { Link } from "react-router-dom";
import { Button, CircularProgress, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AllBlogsAdmin = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
dispatch(GetAllGetBlogAction())
    },[])

    const {loading,blogs,error} = useSelector(state=>state.GetAllBlogsReducer) 


const [SearchTerm, setSearchTerm] = React.useState("");
const [visible, setVisible] = React.useState(10);

const loadMore = () => {
  setVisible((prev) => prev + 10);
};
    return(
        <div>
         <a href='/addblogs' style={{color:'#95C5E4' , textDecoration:'none' }} >
       <p  >   <AddIcon/> Click Here to Add Blogs </p>
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
<br/>
<table class="table">
        <thead>
          <tr>
            <th>Heading</th>
            <th>By</th>
            <th>Category</th>
            <th>Valid?</th>
            <th>Total Paragraphs</th>
            <th>Total Keypoints</th>
            <th>Total Views</th>
            <th>View More</th>
          </tr>
        </thead>
        {loading && <CircularProgress />}

        {blogs &&
          blogs
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
                <tr>
                  <td data-label="Heading"> {i.heading} </td>
                  <td data-label="By"> {i.name} &nbsp; {i.email} </td>
                  <td data-label="Category"> {i.category}  </td>
                  <td data-label="Valid">
                    {" "}
                    {i.isVisible === true ? (
                      <>
                        <DoneIcon style={{ color: "green" }} />
                      </>
                    ) : (
                      <>
                        <CloseIcon style={{ color: "red" }} />
                      </>
                    )}{" "}
                  </td>

               

                  <td data-label="Total para"> {i.paragraphs?.length}  </td>
                  <td data-label="Total Keypoints"> {i.keypoints?.length}  </td>
                  <td data-label="Total Views"> {i.totalViews}  </td>

                  <td data-label="View More">
                    {" "}
                    <Link to={`/blogs/${i._id}`}  >
                      View
                    </Link>{" "}
                  </td>
                </tr>
              );
            })}
      </table>

      {blogs && visible < blogs.length && (
        <Button onClick={loadMore} type="button" variant="contained">
          Load more
        </Button>
      )}

        </div>
    )
}

export default AllBlogsAdmin