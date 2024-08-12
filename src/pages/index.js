import { lazy } from "react";

const Error = lazy(() => import("./Error"));
const Landing = lazy(() => import("./Landing"));
const SharedLayout = lazy(() => import("./SharedLayout"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register/Register"));
const VendorRegister = lazy(() => import("./Register/VendorRegister"));
const Verify = lazy(() => import("./Verify"));
const Venues = lazy(() => import("./Venues"));
const Events = lazy(() => import("./Events"));
const Vendors = lazy(() => import("./Vendors"));
const Vendor = lazy(() => import("./Vendor"));
const Cart = lazy(() => import("./Cart"));

export {
  Error,
  Landing,
  SharedLayout,
  ProtectedRoute,
  Login,
  Register,
  VendorRegister,
  Verify,
  Venues,
  Events,
  Vendors,
  Vendor,
  Cart
};
