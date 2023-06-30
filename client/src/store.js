import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  RegisterAdminReducer,
  LoginAdminReducer,
} from "./reducers/AdminReducer";

import {
  AddNewTestsReducer,
  GetAllTestsReducer,
  GetTestsByComboReducer,
  GetTestsByIDReducer,
  GetTestMedReducer,
  GetTestCategoryReducer,
  GetAllTestsNonPackageReducer,
} from "./reducers/TestsReducer";
import { CartReducer } from "./reducers/CartReducer";
import {
  GetAllEmployeeReducer,
  GetEmployeeByIDReducer,
} from "./reducers/EmployeeReducer";
import {
  GetAllCouponsReducer,
  GetCouponsByIDReducer,
  GetValidCouponsReducer,
  GetCouponsByContactReducer,
} from "./reducers/CouponReducer";
import {
  BookingReducer,
  GetBookingsContactReducer,
  GetBookingsIdReducer,
  GetBookingsAllReducer,
  GetBookingsBYEmpIdReducer,
} from "./reducers/BookingReducer";

import {
  GetAllBlogsReducer,
  GetBlogsByIdReducer,
  EmployeeGetBlogsByIdReducer,
  BlogsByCategoryReducer,
  BlogsByEmployeeReducer,
} from "./reducers/BlogReducers";

import {GetAllContactsReducer} from './reducers/contactReducer'

const FinalReducer = combineReducers({
  RegisterAdminReducer: RegisterAdminReducer,
  LoginAdminReducer: LoginAdminReducer,
  AddNewTestsReducer: AddNewTestsReducer,
  GetAllTestsReducer: GetAllTestsReducer,
  GetTestsByComboReducer: GetTestsByComboReducer,
  GetTestsByIDReducer: GetTestsByIDReducer,
  CartReducer: CartReducer,
  GetTestMedReducer: GetTestMedReducer,
  GetTestCategoryReducer: GetTestCategoryReducer,
  BookingReducer: BookingReducer,
  GetBookingsContactReducer: GetBookingsContactReducer,
  GetBookingsIdReducer: GetBookingsIdReducer,
  GetBookingsAllReducer: GetBookingsAllReducer,
  GetAllEmployeeReducer: GetAllEmployeeReducer,
  GetEmployeeByIDReducer: GetEmployeeByIDReducer,
  GetAllCouponsReducer: GetAllCouponsReducer,
  GetCouponsByIDReducer: GetCouponsByIDReducer,
  GetValidCouponsReducer: GetValidCouponsReducer,
  GetAllTestsNonPackageReducer: GetAllTestsNonPackageReducer,
  GetCouponsByContactReducer: GetCouponsByContactReducer,
  GetAllBlogsReducer: GetAllBlogsReducer,
  GetBlogsByIdReducer: GetBlogsByIdReducer,
  GetBookingsBYEmpIdReducer: GetBookingsBYEmpIdReducer,
  EmployeeGetBlogsByIdReducer: EmployeeGetBlogsByIdReducer,
  BlogsByCategoryReducer: BlogsByCategoryReducer,
  BlogsByEmployeeReducer: BlogsByEmployeeReducer,
  GetAllContactsReducer:GetAllContactsReducer
});

const admin = localStorage.getItem("admin")
  ? JSON.parse(localStorage.getItem("admin"))
  : null;

const CartItem = localStorage.getItem("CartItem")
  ? JSON.parse(localStorage.getItem("CartItem"))
  : [];

const InitialState = {
  CartReducer: { CartItem: CartItem },
  LoginAdminReducer: { admin: admin },
};

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

let store;

if (process.env.NODE_ENV === "production") {
  store = createStore(
    FinalReducer,
    InitialState,
    applyMiddleware(thunk)
  );
} else {
  const { composeWithDevTools } = require("redux-devtools-extension");
  store = createStore(
    FinalReducer,
    InitialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export default store;
