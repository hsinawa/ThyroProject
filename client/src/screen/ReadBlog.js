import { Button, CircularProgress, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  ApproveBlogByIdAction,
  GetBlogByIdAction,
  UpdateBlogViewIdAction,
} from "../actions/BlogAction";
import { GetBlogsByIdReducer } from "../reducers/BlogReducers";
import "./blogstyle.css";

//MUI
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const ReadBlog = () => {
  const dispatch = useDispatch();
  const { blogid } = useParams();
  useEffect(() => {
    dispatch(GetBlogByIdAction({ blogid }));
  }, []);

  const BlogData = useSelector((state) => state.GetBlogsByIdReducer);
  const { loading, Blogdata, error } = BlogData;
  const [isVisible, setisVisible] = React.useState(BlogData?.isVisible);

  const admin = JSON.parse(localStorage.getItem("admin"));

  const [totalViews, settotalViews] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (Blogdata && Blogdata?.length > 0) {
      setTimeout(async () => {
       
        dispatch(UpdateBlogViewIdAction({ blogid }));
      }, 30 * 1000);
    }
  }, [Blogdata]);

  const UpdateBlogStatus = (e) => {
    e.preventDefault();
    const details = {
      isVisible: isVisible,
      blogid: blogid,
      totalViews: totalViews,
    };

    dispatch(ApproveBlogByIdAction({ details }));
  };

  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      {loading && <CircularProgress />}

      {Blogdata && (
        <>
          <h1
            style={{
              textAlign: "justify",
              color: "#0a2351",
            }}
          >
            {" "}
            {Blogdata[0]?.heading}{" "}
          </h1>

          <Stack direction="row" spacing={5}>
            <p> </p>
            <p>
              {" "}
              <PersonIcon style={{ verticalAlign: "-6px" }} />{" "}
              {Blogdata[0]?.name}{" "}
            </p>
            <p>
              {" "}
              <CalendarMonthIcon style={{ verticalAlign: "-6px" }} />{" "}
              {new Date(Blogdata[0]?.createdAt).toString().substr(0, 15)}{" "}
            </p>
            <p>
              <VisibilityIcon style={{ verticalAlign: "-6px" }} />{" "}
              {Blogdata[0]?.totalViews}{" "}
            </p>

            <p></p>
          </Stack>

          <hr />

          <h3
            style={{
              textAlign: "justify",
              color: "#404040",
            }}
          >
            {Blogdata[0]?.paragraphs[0]?.subheadings}
          </h3>

          <p
            style={{
              textAlign: "justify",
              color: "#686868",
            }}
          >
            {Blogdata[0]?.paragraphs[0]?.details}
          </p>
          <br />
          <div className="image-container">
            <img
              className="image-blog"
              src={Blogdata[0]?.image}
              alt="BlogImage"
            />
          </div>
          <br />
          {Blogdata[0]?.paragraphs?.slice(1).map((i) => {
            return (
              <>
                {" "}
                <h3
                  style={{
                    textAlign: "justify",
                    color: "#404040",
                  }}
                >
                  {i.subheadings}
                </h3>
                <p
                  style={{
                    textAlign: "justify",
                    color: "#686868",
                  }}
                >
                  {i.details}
                </p>{" "}
              </>
            );
          })}

          <h3
            style={{
              textAlign: "justify",
              color: "#404040",
            }}
          >
            Key Points:
          </h3>

          <div className="blog-keypoints">
            {Blogdata[0]?.keypoints?.map((i, index) => (
              <ul
                key={index}
                style={{
                  textAlign: "justify",
                  color: "#404040",
                }}
              >
                <li
                  style={{
                    textAlign: "justify",
                    color: "#404040",
                  }}
                >
                  {i.point}
                </li>
              </ul>
            ))}
          </div>

          <br />

          <hr />
          <h3
            style={{
              textAlign: "justify",
              color: "#404040",
            }}
          >
            Author Details
          </h3>

          <Stack direction="row" spacing={5}>
            <p> </p>
            {Blogdata[0].personalSite?.length > 0 && (
              <p title="Personal Site">
                <Link
                  to={`${Blogdata[0].personalSite}`}
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <LanguageIcon
                    style={{ verticalAlign: "-6px", fontSize: "30px" }}
                  />
                </Link>
              </p>
            )}

            {Blogdata[0].instagramLink?.length > 0 && (
              <p title="Instagram">
                <Link
                  to={`${Blogdata[0].instagramLink}`}
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <InstagramIcon
                    style={{ verticalAlign: "-6px", fontSize: "30px" }}
                  />
                </Link>
              </p>
            )}

            {Blogdata[0].facebookLink?.length > 0 && (
              <p title="FaceBook">
                <Link
                  to={`${Blogdata[0].facebookLink}`}
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <FacebookIcon
                    style={{ verticalAlign: "-6px", fontSize: "30px" }}
                  />
                </Link>
              </p>
            )}

            {Blogdata[0].twitterLink?.length > 0 && (
              <p title="Twitter">
                <Link
                  to={`${Blogdata[0].twitterLink}`}
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <TwitterIcon
                    style={{ verticalAlign: "-6px", fontSize: "30px" }}
                  />
                </Link>
              </p>
            )}
            {Blogdata[0].linkedinLink?.length > 0 && (
              <p title="LinkedIn">
                <Link
                  to={`${Blogdata[0].linkedinLink}`}
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <LinkedInIcon
                    style={{ verticalAlign: "-6px", fontSize: "30px" }}
                  />
                </Link>
              </p>
            )}

            <p></p>
          </Stack>
        </>
      )}

      {admin && (
        <section>
          <h3>This Section is Only Visible to Admin</h3>

          <form onSubmit={UpdateBlogStatus}>
            <Select
              value={isVisible}
              onChange={(e) => {
                setisVisible(e.target.value);
              }}
            >
              <MenuItem value={true}>Show</MenuItem>
              <MenuItem value={false}>Hide</MenuItem>
            </Select>

            <Button
              style={{
                backgroundColor: "blue",
                color: "white",
              }}
              type="submit"
              value="submit"
            >
              Update
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </form>

          <br />
          <br />
          <br />
        </section>
      )}
    </div>
  );
};

export default ReadBlog;
