import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTestsNonPackageReducer } from "../reducers/TestsReducer";
import { GetAllTestsNonPacageAction } from "../actions/TestsAction";
import CircularStatic from "../components/loading";
import React from "react";
import "./grid.css";
import GridTests from "./GridTests";

//Material UI
import TextField from "@material-ui/core/TextField";
import InputLabel from "@mui/material/InputLabel";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

export const AllTestsSearch = () => {
  const getalltests = useSelector((state) => state.GetAllTestsNonPackageReducer);
  const { tests, loading, error } = getalltests;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllTestsNonPacageAction());
  }, []);

  const [SearchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(10);

  const loadMore = () => {
    setVisible((prev) => prev + 10);
  };

  return (
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

      {tests && (
        <div className="grid-3">
          {tests
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
                <p>
                  <a href={`test/${i._id}`} style={{ textDecoration: "none" }}>
                    <p>
                      <GridTests i={i} />
                    </p>
                  </a>
                </p>
              );
            })}
        </div>
      )}

      {tests && visible < tests.length && (
        <Button onClick={loadMore} type="button" variant="contained">
          Load more
        </Button>
      )}
    </div>
  );
};

export default AllTestsSearch;
