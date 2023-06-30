
const GetBlog_Req = "GetBlog_Req";
const GetBlog_Suc = "GetBlog_Suc";
const GetBlog_Fail = "GetBlog_Fail";


export const GetAllBlogsReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
      case GetBlog_Req:
        return {
          ...state,
          loading: true,
        };
  
      case GetBlog_Suc:
        return {
          ...state,
          loading: false,
          blogs: action.payload,
        };
  
      case GetBlog_Fail:
        return {
          ...state,
          loading: true,
          error: false,
        };
  
      default:
        return state;
    }
  };








  const Blog_Req = "Blog_Request";
  const Blog_Success = "Blog_Success";
  const Blog_Fail = "Blog_Failed";

export const GetBlogsByIdReducer = (state = {  }, action) => {
  switch (action.type) {
    case `${Blog_Req}`:
      return {
        ...state,
        loading: true,
      };

    case `${Blog_Success}`:
      return {
        ...state,
        loading: false,
        Blogdata: action.payload,
      };

    case `${Blog_Fail}`:
      return {
        ...state,
        loading: false,
        error: true,
        Blogdata: action.payload,
      };

    default:
      return state;
  }
};








const BlogBy_ID_Req = 'BlogBy_ID_Req'
const BlogBy_ID_Suc = 'BlogBy_ID_Suc'
const BlogBy_ID_Fail = 'BlogBy_ID_Fail' 


export const EmployeeGetBlogsByIdReducer = (state = {  }, action) => {
switch (action.type) {
  case `${BlogBy_ID_Req}`:
    return {
      ...state,
      loading: true,
    };

  case `${BlogBy_ID_Suc}`:
    return {
      ...state,
      loading: false,
      Blogdata: action.payload,
    };

  case `${BlogBy_ID_Fail}`:
    return {
      ...state,
      loading: false,
      error: true,
      Blogdata: action.payload,
    };

  default:
    return state;
}
};






const BlogCat_Req = "BlogCat_Request";
const BlogCat_Success = "BlogCat_Success";
const BlogCat_Fail = "BlogCat_Failed";


export const BlogsByCategoryReducer = (state = {  }, action) => {
switch (action.type) {
  case `${BlogCat_Req}`:
    return {
      ...state,
      loading: true,
    };

  case `${BlogCat_Success}`:
    return {
      ...state,
      loading: false,
      Blogdata: action.payload,
    };

  case `${BlogCat_Fail}`:
    return {
      ...state,
      loading: false,
      error: true,
      Blogdata: action.payload,
    };

  default:
    return state;
}
};




const BlogEmp_Req = "BlogCat_Request";
const BlogEmp_Success = "BlogCat_Success";
const BlogEmp_Fail = "BlogCat_Failed";


export const BlogsByEmployeeReducer = (state = {  }, action) => {
switch (action.type) {
  case `${BlogEmp_Req}`:
    return {
      ...state,
      loading: true,
    };

  case `${BlogEmp_Success}`:
    return {
      ...state,
      loading: false,
      Blogdata: action.payload,
    };

  case `${BlogEmp_Fail}`:
    return {
      ...state,
      loading: false,
      error: true,
      Blogdata: action.payload,
    };

  default:
    return state;
}
};