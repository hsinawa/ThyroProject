import React from 'react'
import './blog.css'

//MUI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import VisibilityIcon from "@mui/icons-material/Visibility";





 function RecipeReviewCard({blogdata}) {
  
    function randomColor() {
        let hex = Math.floor(Math.random() * 0xffffff);
        let color = "#" + hex.toString(16);
    
        return color;
      }
    return (
      <Card  id='card'   sx={{
        maxWidth: 350,
        margin: "0 auto",
        padding: "0.1em",
        borderRadius:'15px'
      }} >
           <CardMedia
          component="img"
          height="194"
          
          image={`${blogdata?.image}`}
          alt="Blog Image"
        />

        <CardHeader
          avatar={
            <Avatar style={{
                backgroundColor:randomColor()
            }} aria-label="recipe">
              {blogdata?.name?.substr(0,1).toUpperCase()}
            </Avatar>
          }
       
          title={`By ${blogdata?.name.toUpperCase()}`}
          subheader={`Total Views ${blogdata?.totalViews} `}
        />
       
        <CardContent>
          <Typography variant="h6" color="text.secondary" align='left' >
          {blogdata?.heading}
          </Typography>
        </CardContent>
   
     
      </Card>
    );
  }
  



const BlogCard = ({blogdata}) => {

    

      

    return(
        <div className='card-blog' >
           <RecipeReviewCard blogdata={blogdata} />
            
        </div>
    )
}

export default BlogCard