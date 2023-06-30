import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCouponAction,
  GetAllCouponsAction,
} from "../actions/CouponAction";
import { Button, CircularProgress, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const CouponSection = () => {
  const dispatch = useDispatch();

  const coupdata = useSelector(
    (state) => state.GetAllCouponsReducer
  );
const { coupons, loading, error } = coupdata

  useEffect(() => {
    dispatch(GetAllCouponsAction());
  },[dispatch]);

  const deleteTest = (id) => {
    const r = window.confirm("Do you want to delete?");
    if (r === true) {
      dispatch(DeleteCouponAction(id));
    } else {
      return;
    }
  };

  const [SearchTerm, setSearchTerm] = React.useState("");
  const [visible, setVisible] = React.useState(10);

  const loadMore = () => {
    setVisible((prev) => prev + 10);
  };

  return (
    <div>
      <a
        href="/admin/addcoupons"
        style={{ color: "#95C5E4", textDecoration: "none" }}
      >
        <p>
          {" "}
          <AddIcon /> Click Here to Add Coupons{" "}
        </p>
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

      <br />
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Category</th>
            <th>Valid?</th>
            <th>Delete</th>

            <th>Edit</th>
          </tr>
        </thead>
        {loading && <CircularProgress />}
        {error && <h2 style={{ color: "red" }}> Error is : {error} </h2>}

        {coupons &&
          coupons
            .slice(0, visible)
            .filter((val) => {
              if (SearchTerm === "") {
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
                  <td data-label="Name"> {i.name} </td>
                  <td data-label="Value"> {i.value}% </td>
                  <td data-label="Category">
                    {" "}
                    {i.category.length > 0 ? i.category : <> All </>}{" "}
                  </td>
                  <td data-label="Valid">
                    {" "}
                    {i.isValid === true ? (
                      <>
                        <DoneIcon style={{ color: "green" }} />
                      </>
                    ) : (
                      <>
                        <CloseIcon style={{ color: "red" }} />
                      </>
                    )}{" "}
                  </td>

                  <td data-label="Delete" onClick={() => deleteTest(i._id)}>
                    {" "}
                    <DeleteIcon />{" "}
                  </td>

                  <td data-label="Edit">
                    {" "}
                    <Link to={`/admin/editcoupon/${i._id}`}>
                      <EditIcon />
                    </Link>{" "}
                  </td>
                </tr>
              );
            })}
      </table>

      {coupons && visible < coupons.length && (
        <Button onClick={loadMore} type="button" variant="contained">
          Load more
        </Button>
      )}
    </div>
  );
};

export default CouponSection;
