import React, { useEffect } from "react";
import { EmployeeBlogByIdAction } from "../actions/BlogAction";
import { useDispatch, useSelector } from "react-redux";
import { EmployeeGetBlogsByIdReducer } from "../reducers/BlogReducers";
import { Link } from "react-router-dom";
import BlogCard from "../screen/blogCard";
import CircularStatic from "../components/loading";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Button, CircularProgress, TextField } from '@mui/material';

const AllBlogsByEmployee = () => {
  const dispatch = useDispatch();
  const employee = JSON.parse(localStorage.getItem("employee"));
  const employeeId = employee._id;
  useEffect(() => {
    dispatch(EmployeeBlogByIdAction({ employeeId }));
  }, []);

  const { Blogdata, loading, error } = useSelector(
    (state) => state.EmployeeGetBlogsByIdReducer
  );



const [SearchTerm, setSearchTerm] = React.useState("");
const [visible, setVisible] = React.useState(10);

const loadMore = () => {
  setVisible((prev) => prev + 10);
};

  return (
    <div>
    
      {error && <h2>Error Occured : {error} </h2>}


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

        {Blogdata &&
          Blogdata
            .slice(0, visible)
            .filter((val) => {
              if (SearchTerm == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(SearchTerm.toLowerCase())
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

      <br/><br/>
      {Blogdata && visible < Blogdata.length && (
        <Button onClick={loadMore} type="button" variant="contained">
          Load more
        </Button>
      )}
    </div>
  );
};

export default AllBlogsByEmployee;
