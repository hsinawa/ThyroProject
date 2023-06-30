import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllBookingsAction,
  UploadReportAction,
  GetAllBookingsByMonthAction,
  GetAllBookingsByYearAction,
} from "../actions/BookingAction";
import { GetBookingsAllReducer } from "../reducers/BookingReducer";
import Calendar from "react-calendar";
import "./react-calendar.css";
import CircularStatic from "../components/loading";
import { MenuItem, Select } from "@mui/material";
import moment from "moment";

//Charts

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GenderCount = ({ totalFemales, totalMales, totalOthers }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = ["Gender"];

  const data = {
    labels,
    datasets: [
      {
        label: "Males",
        data: [totalMales],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: [totalFemales],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Others",
        data: [totalOthers],
        backgroundColor: "rgba(35, 126, 135, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

const ProfitCount = ({ totalMoney, totalProfit, totalCostprice }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = ["Money"];

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: [totalMoney],
        backgroundColor: "rgba(9,163,168,0.5)",
      },
      {
        label: "Profit",
        data: [totalProfit],
        backgroundColor: "rgba(23,168,2,0.5)",
      },
      {
        label: "Cost Price",
        data: [totalCostprice],
        backgroundColor: "rgba(212,15,47, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

const DailyPage = ({ dateRange }) => {
  const dispatch = useDispatch();

  const AllBookingsState = useSelector((state) => state.GetBookingsAllReducer);
  const { Bookings, loading } = AllBookingsState;
  const [value, onChange] = React.useState(new Date());
  const SelectedDate = value.toString().substr(0, 15);

  useEffect(() => {
    if (dateRange === "daily") {
      dispatch(GetAllBookingsAction({ SelectedDate }));
    }
  }, [SelectedDate]);

  const dataCategory = [];
  let totalMales = 0;
  let totalFemales = 0;
  let totalOthers = 0;

  var totalMoney = 0;
  var totalProfit = 0;
  var totalCostprice = 0;

  if (Bookings) {
    Bookings?.map((i) => {
      dataCategory.push(i.bookedtests);

      if (i.gender === "Male") {
        totalMales++;
      } else if (i.gender === "Female") {
        totalFemales++;
      } else {
        totalOthers++;
      }
    });
  }

  function CategoryFrequency() {
    // Calculate the frequency of each category
    const categoryFrequency = {};

    dataCategory?.forEach((group) => {
      group.forEach((item) => {
        totalMoney += item.price;
        totalCostprice += item.profit;
        totalProfit = totalMoney - totalCostprice;
        categoryFrequency[item.category] =
          (categoryFrequency[item.category] || 0) + 1;
      });
    });

    return (
      <div>
        <h2>Category Frequency</h2>
        <p>
          {Object.entries(categoryFrequency).map(([category, count]) => (
            <h6 key={category}>
              {category}: {count}
            </h6>
          ))}
        </p>

        <div
          style={{
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ProfitCount
            totalMoney={totalMoney}
            totalProfit={totalProfit}
            totalCostprice={totalCostprice}
          />
        </div>

        <h6>Buisness Insights for  {SelectedDate} </h6>
        <h6>Total Sales = {totalMoney} </h6>
        <h6>Total Profit = {totalProfit} </h6>

        <hr />
      </div>
    );
  }

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      {loading && <CircularStatic />}

      {Bookings && (
        <p>
          <CategoryFrequency />

          <h3> Based on Gender </h3>
          <div
            style={{
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <GenderCount
              totalFemales={totalFemales}
              totalMales={totalMales}
              totalOthers={totalOthers}
            />

            <h6>Total Males = {totalMales} </h6>
            <h6>Total Females = {totalFemales} </h6>
            <h6>Total Others = {totalOthers} </h6>
          </div>

          <hr />
        </p>
      )}
    </div>
  );
};

const MonthlyPage = ({ dateRange }) => {
  const dispatch = useDispatch();

  const AllBookingsState = useSelector((state) => state.GetBookingsAllReducer);
  const { Bookings, loading } = AllBookingsState;
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
  };

  const SelectedDate = value?.toString().slice(0, 15);

  useEffect(() => {
    if (dateRange === "monthly") {
      dispatch(GetAllBookingsByMonthAction({ SelectedDate }));
    }
  }, [SelectedDate]);

  const dataCategory = [];
  let totalMales = 0;
  let totalFemales = 0;
  let totalOthers = 0;

  var totalMoney = 0;
  var totalProfit = 0;
  var totalCostprice = 0;

  if (Bookings) {
    Bookings?.map((i) => {
      dataCategory.push(i.bookedtests);

      if (i.gender === "Male") {
        totalMales++;
      } else if (i.gender === "Female") {
        totalFemales++;
      } else {
        totalOthers++;
      }
    });
  }

  function CategoryFrequency() {
    // Calculate the frequency of each category
    const categoryFrequency = {};

    dataCategory?.forEach((group) => {
      group.forEach((item) => {
        totalMoney += item.price;
        totalCostprice += item.profit;
        totalProfit = totalMoney - totalCostprice;
        categoryFrequency[item.category] =
          (categoryFrequency[item.category] || 0) + 1;
      });
    });

    return (
      <div>
        <h2>Category Frequency</h2>
        <p>
          {Object.entries(categoryFrequency).map(([category, count]) => (
            <h6 key={category}>
              {category}: {count}
            </h6>
          ))}
        </p>
        <hr />

        <div
          style={{
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ProfitCount
            totalMoney={totalMoney}
            totalProfit={totalProfit}
            totalCostprice={totalCostprice}
          />
        </div>
        <h6>Buisness Insights for  {SelectedDate} </h6>
        <h6>Total Sales = {totalMoney} </h6>
        <h6>Total Profit = {totalProfit} </h6>

        <hr />
      </div>
    );
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        view="year"
        onClickMonth={(clickedDate) => setValue(clickedDate)}
      />
      {loading && <CircularStatic />}
      {Bookings && (
        <p>
          <CategoryFrequency />

          <h3> Based on Gender </h3>
          <div
            style={{
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <GenderCount
              totalFemales={totalFemales}
              totalMales={totalMales}
              totalOthers={totalOthers}
            />

            <h6>Total Males = {totalMales} </h6>
            <h6>Total Females = {totalFemales} </h6>
            <h6>Total Others = {totalOthers} </h6>
          </div>
        </p>
      )}
    </div>
  );
};

const YearlyPage = ({ dateRange }) => {
  const dispatch = useDispatch();

  const AllBookingsState = useSelector((state) => state.GetBookingsAllReducer);
  const { Bookings, loading } = AllBookingsState;
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
  };
  const SelectedDate = value?.toLocaleString("default", {
    year: "numeric",
  });

  useEffect(() => {
    if (dateRange === "yearly") {
      dispatch(GetAllBookingsByYearAction({ SelectedDate }));
    }
  }, [SelectedDate]);

  const dataCategory = [];
  let totalMales = 0;
  let totalFemales = 0;
  let totalOthers = 0;

  var totalMoney = 0;
  var totalProfit = 0;
  var totalCostprice = 0;

  if (Bookings) {
    Bookings?.map((i) => {
      dataCategory.push(i.bookedtests);

      if (i.gender === "Male") {
        totalMales++;
      } else if (i.gender === "Female") {
        totalFemales++;
      } else {
        totalOthers++;
      }
    });
  }

  function CategoryFrequency() {
    // Calculate the frequency of each category
    const categoryFrequency = {};

    dataCategory?.forEach((group) => {
      group.forEach((item) => {
        totalMoney += item.price;
        totalCostprice += item.profit;
        totalProfit = totalMoney - totalCostprice;
        categoryFrequency[item.category] =
          (categoryFrequency[item.category] || 0) + 1;
      });
    });

    return (
      <div>
        <h2>Category Frequency</h2>
        <p>
          {Object.entries(categoryFrequency).map(([category, count]) => (
            <h6 key={category}>
              {category}: {count}
            </h6>
          ))}
        </p>

        <hr />

        <div
          style={{
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ProfitCount
            totalMoney={totalMoney}
            totalProfit={totalProfit}
            totalCostprice={totalCostprice}
          />
        </div>
        <h6>Buisness Insights for  {SelectedDate} </h6>
        <h6>Total Sales = {totalMoney} </h6>
        <h6>Total Profit = {totalProfit} </h6>

        <hr />
      </div>
    );
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        view="decade"
        onClickYear={(clickedDate) => setValue(clickedDate)}
      />
      {loading && <CircularStatic />}
      {Bookings && (
        <p>
          <CategoryFrequency />

          <h3> Based on Gender </h3>
          <div
            style={{
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <GenderCount
              totalFemales={totalFemales}
              totalMales={totalMales}
              totalOthers={totalOthers}
            />

            <h6>Total Males = {totalMales} </h6>
            <h6>Total Females = {totalFemales} </h6>
            <h6>Total Others = {totalOthers} </h6>
          </div>
        </p>
      )}
    </div>
  );
};

const ProfitPageAdmin = () => {
  const [dateRange, setdateRange] = useState("daily1");

  return (
    <div>
      <h3>Select Range</h3>
      <Select
        value={dateRange}
        onChange={(e) => {
          setdateRange(e.target.value);
        }}
      >
        <MenuItem value="daily">Daily</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
        <MenuItem value="yearly">Yearly</MenuItem>
      </Select>
      <br />
      <br />
      <br />

      <h3>Buisness Insights</h3>

      {dateRange === "daily" && <DailyPage dateRange={dateRange} />}

      {dateRange === "monthly" && <MonthlyPage dateRange={dateRange} />}

      {dateRange === "yearly" && <YearlyPage dateRange={dateRange} />}
    </div>
  );
};

export default ProfitPageAdmin;
