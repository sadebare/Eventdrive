import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import {
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
} from "./pages";
import { Loading } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vendor-register" element={<VendorRegister />} />
          <Route path="/verify" element={<Verify />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Landing />} />
            <Route path="/venues/:state" element={<Venues />} />
            <Route path="/events/:eventId" element={<Events />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendor/:vendorId" element={<Vendor />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
