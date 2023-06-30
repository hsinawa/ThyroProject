import { BrowserRouter, Route, Routes } from "react-router-dom";
import CouponSection from "./admin/AllCoupon";
import AddEmployeeAdmin from "./admin/addEmployee";
import AddTestsAdmin from "./admin/AddTests";
import AllBookingsAdmin from "./admin/AllBookings";
import AllEmployeesAdmin from "./admin/allEmployees";
import EditTestAdmin from "./admin/editTests";
import AdminLogin from "./admin/LoginAdmin";
import PendingBookingsAdmin from "./admin/pendingBookings";
import AdminScreen from "./admin/ScreenAdmin";
import AllTests from "./admin/TestsAdmin";
import "./App.css";
import BookingDescription from "./components/BookingDescription";
import CartScreen from "./components/CartScreen";
import NavBar from "./Header/Navbar";
import AboutEmployee from "./screen/AboutEmployee";
import AddressScreen from "./screen/AddressScreen";
import ComboSearch from "./screen/AllCombos";
import AllTestsSearch from "./screen/AllTests";
import BookingResult from "./screen/BookingResult";
import ConfirmationScreen from "./screen/ConfirmTest";
import HomeScreen from "./screen/homescreen";
import MedicalTests from "./screen/MedicalTests";
import TestDescription from "./screen/TestDescription";
import TestCategory from "./screen/TestResultScreen";
import TrackBookings from "./screen/TrackingPage";
import AddCouponsAdmin from "./admin/AddCoupons";
import EditCoupon from "./admin/EditCouponAdmin";
import ApplyCoupons from "./screen/CouponApply";
import CouponSearchPhone from "./screen/couponPhoneNumber";
import AddBlogs from "./components/AddBlogs";
import AllBlogsAdmin from "./admin/adminBlogs";
import ReadBlog from "./screen/ReadBlog";
import AllBlogsScreen from "./screen/AllBlogsScreen";
import ErrorPage from "./screen/ErrorPage";
import AboutWellBe from "./screen/AboutUs";
import AboutDeveloper from "./screen/aboutDeveloper";
import ContactUsScreen from "./screen/contactUSScreen";
import SuccessPage from "./screen/successScreen";
import EmployeeLogin from "./Employees/LoginPageEmployee";
import EmployeePage from "./Employees/EmployeePage";
import TodaySchedule from "./Employees/todaySchedule";

import ProfileEmployee from "./Employees/profileeEmplyee";
import AllBlogsByEmployee from "./Employees/AllBlogsEmployee";
import LastSectionScreen from "./screen/EndSectionScreen";
import ContactScreenAdmin from "./admin/ContactScreenAdmin";
import ProfitPageAdmin from "./admin/profitPage";
import AdminEmailSection from "./admin/EmailSectionAdmin";

function App() {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const employee = JSON.parse(localStorage.getItem("employee"));

  return (
    <div className="App">
      <NavBar />
      <br />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/test/:id" element={<TestDescription />} />
          <Route path="/testtype/test/:id" element={<TestDescription />} />
          <Route path="/testtype/:category" element={<TestCategory />} />
          <Route path="/alltests" element={<AllTestsSearch />} />
          <Route path="/allcombos" element={<ComboSearch />} />
          <Route path="/medicaltest" element={<MedicalTests />} />
          {admin ? <Route path="/admin" element={<AdminScreen />} /> : null}
          {admin ? <Route path="/admin/tests" element={<AllTests />} /> : null}
          {admin ? (
            <Route path="/admin/addtests" element={<AddTestsAdmin />} />
          ) : null}
          {admin ? (
            <Route path="/admin/allbookings" element={<AllBookingsAdmin />} />
          ) : null}
          {admin ? (
            <Route
              path="/admin/futurebookings"
              element={<PendingBookingsAdmin />}
            />
          ) : null}
          {admin ? (
            <Route
              path="/admin/bookingdetail/:id"
              element={<BookingDescription />}
            />
          ) : null}
          {admin ? (
            <Route path="/admin/addemployee" element={<AddEmployeeAdmin />} />
          ) : null}
          {admin ? (
            <Route path="/admin/allemployee" element={<AllEmployeesAdmin />} />
          ) : null}
          {admin ? (
            <Route path="/admin/edittests/:id" element={<EditTestAdmin />} />
          ) : null}
          {admin ? (
            <Route path="/admin/coupons" element={<CouponSection />} />
          ) : null}
          {admin ? (
            <Route path="/admin/addcoupons" element={<AddCouponsAdmin />} />
          ) : null}

{admin ? (
            <Route path="/admin/sendemail" element={<AdminEmailSection />} />
          ) : null}

          {admin ? (
            <Route path="/admin/adminblogs" element={<AllBlogsAdmin />} />
          ) : null}
          {admin ? (
            <Route
              path="/admin/editcoupon/:couponid"
              element={<EditCoupon />}
            />
          ) : null}

          {admin ? (
            <Route
              path="/admin/admincontact"
              element={<ContactScreenAdmin />}
            />
          ) : null}

          {admin ? (
            <Route path="/admin/profit" element={<ProfitPageAdmin />} />
          ) : null}

          <Route path="/cart" element={<CartScreen />} />
          <Route path="/blogs/:blogid" element={<ReadBlog />} />
          <Route path="/allblogs" element={<AllBlogsScreen />} />
          <Route path="/address" element={<AddressScreen />} />
          <Route path="/confirm" element={<ConfirmationScreen />} />
          <Route path="/trackingpage" element={<TrackBookings />} />
          <Route path="/showbookings" element={<BookingResult />} />
          <Route path="/applycoupons" element={<ApplyCoupons />} />
          <Route path="/aboutemp/:id" element={<AboutEmployee />} />
          <Route path="/addblogs" element={<AddBlogs />} />
          <Route path="/phonecoupon" element={<CouponSearchPhone />} />
          <Route path="/bookingdetail/:id" element={<BookingDescription />} />
          <Route path="/aboutus" element={<AboutWellBe />} />
          <Route path="/aboutdeveloper" element={<AboutDeveloper />} />
          <Route path="/contactus" element={<ContactUsScreen />} />
          <Route path="/employeelogin" element={<EmployeeLogin />} />

          {employee ? (
            <Route path="/employeepage" element={<EmployeePage />} />
          ) : null}

          {employee ? (
            <Route path="/employeepage/profile" element={<ProfileEmployee />} />
          ) : null}
          {employee ? (
            <Route path="/employeepage/today" element={<TodaySchedule />} />
          ) : null}
          {employee ? (
            <Route
              path="/employeepage/bookingdetail/:id"
              element={<BookingDescription />}
            />
          ) : null}

          {employee ? (
            <Route
              path="/employeepage/allblogs"
              element={<AllBlogsByEmployee />}
            />
          ) : null}

          <Route path="/successcontact" element={<SuccessPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <div>
          <LastSectionScreen />
        </div>
      </BrowserRouter>

      <br />
      <br />
    </div>
  );
}

export default App;
