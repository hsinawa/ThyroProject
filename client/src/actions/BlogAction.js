import axios from "axios";
import { get } from "mongoose";


const BlogAdd_Req = "BlogAdd_Req";
const BlogAdd_Suc = "BlogAdd_Suc";
const BlogAdd_Fail = "BlogAdd_Fail";

export const AddNewBlogAdminAction = ({blogdata}) => (dispatch) => {
  dispatch({ type: BlogAdd_Req });
  
  axios
    .post("/api/blogs/addblog", {blogdata})
    .then((res) => {
      dispatch({ type: BlogAdd_Suc, payload: res.data });
      sessionStorage.setItem('blog-added')
      window.location.href = "/blogadded";
    })
    .catch((err) => {
      dispatch({ type: BlogAdd_Fail });

      window.location.href = "/error";
      console.log("Error is ", err);
    });
};




const GetBlog_Req = "GetBlog_Req";
const GetBlog_Suc = "GetBlog_Suc";
const GetBlog_Fail = "GetBlog_Fail";

export const GetAllGetBlogAction = () => (dispatch) => {
  dispatch({ type: GetBlog_Req });
  axios
    .get("/api/blogs/getallblog")
    .then((res) => {
      dispatch({ type: GetBlog_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetBlog_Fail });

      console.log("Error is ", err);
    });
};




export const GetAllValidBlogAction = () => (dispatch) => {
  dispatch({ type: GetBlog_Req });
  axios
    .get("/api/blogs/getallvalidblogs")
    .then((res) => {
      dispatch({ type: GetBlog_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetBlog_Fail });

      console.log("Error is ", err);
    });
};



export const GetAllValidBlogHomeScreenAction = () => (dispatch) => {
  dispatch({ type: GetBlog_Req });
  axios
    .get("/api/blogs/getallvalidblogsforhomescreen")
    .then((res) => {
      dispatch({ type: GetBlog_Suc, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GetBlog_Fail });

      console.log("Error is ", err);
    });
};




const Blog_Req = "Blog_Request";
const Blog_Success = "Blog_Success";
const Blog_Fail = "Blog_Failed";

export const GetBlogByIdAction =
  ({ blogid }) =>
  (dispatch) => {
    dispatch({ type: Blog_Req });

    axios
      .post("/api/blogs/getblogbyid", { blogid })
      .then((res) => {
        dispatch({ type: Blog_Success, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: Blog_Fail, payload: err });
      });
  };






  const ApproveBlog_Req = "ApproveBlog_Request";
const ApproveBlog_Success = "ApproveBlog_Success";
const ApproveBlog_Fail = "ApproveBlog_Failed";

export const ApproveBlogByIdAction =
  ({ details }) =>
  (dispatch) => {
    dispatch({ type: ApproveBlog_Req });

    axios
      .post("/api/blogs/approveblog", { details })
      .then((res) => {
        dispatch({ type: ApproveBlog_Success, payload: res.data });
        alert('Status Updated')
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: ApproveBlog_Fail, payload: err });
      });
  };



  const BlogBy_ID_Req = 'BlogBy_ID_Req'
  const BlogBy_ID_Suc = 'BlogBy_ID_Suc'
  const BlogBy_ID_Fail = 'BlogBy_ID_Fail' 

  export const EmployeeBlogByIdAction =
  ({ employeeId }) =>
  (dispatch) => {
    dispatch({ type: BlogBy_ID_Req });

    axios
      .post("/api/blogs/blogbyemployeeid", { employeeId })
      .then((res) => {
        dispatch({ type: BlogBy_ID_Suc, payload: res.data });
        
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: BlogBy_ID_Fail, payload: err });
      });
  };










  const UpdateViewBlog_Req = "UpdateViewBlog_Request";
const UpdateViewBlog_Success = "UpdateViewBlog_Success";
const UpdateViewBlog_Fail = "UpdateViewBlog_Failed";

export const UpdateBlogViewIdAction =
  ({ blogid }) =>
  (dispatch) => {
    
    dispatch({ type: UpdateViewBlog_Req });

    axios
      .post("/api/blogs/increaseview", { blogid })
      .then((res) => {
        dispatch({ type: UpdateViewBlog_Success, payload: res.data });
       
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: UpdateViewBlog_Fail, payload: err });
      });
  };





const BlogCat_Req = "BlogCat_Request";
const BlogCat_Success = "BlogCat_Success";
const BlogCat_Fail = "BlogCat_Failed";

export const GetBlogByCategoryAction =
  ({ category }) =>
  (dispatch) => {
    dispatch({ type: BlogCat_Req });

    axios
      .post("/api/blogs/getblogbycategory", { category })
      .then((res) => {
        dispatch({ type: BlogCat_Success, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: BlogCat_Fail, payload: err });
      });
  };




  const BlogEmp_Req = "BlogCat_Request";
const BlogEmp_Success = "BlogCat_Success";
const BlogEmp_Fail = "BlogCat_Failed";

export const GetBlogByEmployeeAction =
  ({ id }) =>
  (dispatch) => {
    dispatch({ type: BlogEmp_Req });

    axios
      .post("/api/blogs/getblogbyemployee", { id })
      .then((res) => {
        dispatch({ type: BlogEmp_Success, payload: res.data });
      })
      .catch((err) => {
        console.log(err);

        dispatch({ type: BlogEmp_Fail, payload: err });
      });
  };