import React, { useEffect } from "react";

import "./blog.css";
import { GetAllBlogsReducer } from "../reducers/BlogReducers";
import Slider from "react-slick-slider";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useDispatch, useSelector } from "react-redux";
import { GetAllValidBlogHomeScreenAction } from "../actions/BlogAction";
import BlogCard from "./blogCard";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";


const DetectDevice = () =>{
    const [width, setWidth] = React.useState(window.innerWidth);

function handleWindowSizeChange() {
  setWidth(window.innerWidth);
}

useEffect(() => {
  window.addEventListener('resize', handleWindowSizeChange);

  return () => {
    window.removeEventListener('resize', handleWindowSizeChange);
  };
}, []);



return width>=900?'desktop':'mobile'

}




const cssstyle = `
.container {
  margin: 0 auto;
  padding:10px 10px 10px 10px;
  width: 80%;
  
  margin-left: auto;
  margin-right: auto;
}

.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center h3 {
    transition: all .10s ease;
}
`;







const Multi = ({blogs}) =>{
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return <div> <style>{cssstyle}</style> <Carousel
    swipeable={true}
    draggable={true}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={DetectDevice() !== "mobile" ? true : false}
    autoPlaySpeed={1500}
    keyBoardControl={true}
    customTransition="all 3s"
    transitionDuration={3000}
   
    
  
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    {blogs &&
          blogs.map((i) => {
           return <div> <br/> <Link to={`/blogs/${i._id}`} style={{textDecoration:'none'}}  ><BlogCard blogdata={i} /></Link> <br/> </div> ;
          })}
  </Carousel></div>;
  

}


const BlogGrid = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllValidBlogHomeScreenAction());
      }, []);
      const { loading, blogs, error } = useSelector(
        (state) => state.GetAllBlogsReducer
      );
  return (
    <div>
        {loading&&(<CircularProgress />)}
        {error&&(<p>The Error Occured: {error} </p>)}
       <div style={{width:'84%', marginLeft:'auto', marginRight:'auto'}} >
        {blogs&&(<Multi blogs={blogs} />)}
        </div>
      
    </div>
  );
};

export default BlogGrid;
