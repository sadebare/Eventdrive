import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormFields, LogoHeader, TabSwitcher } from "../../components";
import google from "/google.svg";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [activeTab, setActiveTab] = useState("Planner");
  const [isVerified, setIsVerified] = useState(false);

  const handleLogin = (values) => {
    // Handle form submission
    console.log(values);
  };

  // Define the fields for different tabs
  const fields = [
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Email Address",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  ];

  return (
    <div className="md:grid md:grid-cols-5">
      <div className="align-element flex flex-col md:col-span-3 gap-8 py-10 2xl:py-[33px] md:px-48 flex-1">
        <LogoHeader />
        <div className="flex flex-col gap-2">
          <div className="text-xl font-bold">Log In</div>
          <p className="text-gray-500">
            Etiam accumsan lorem leo, non aliquet ipsum mattis non. Suspendisse
            laoreet non turpis in tempus.
          </p>
        </div>
        <TabSwitcher
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={["Planner", "Vendor"]}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="grid gap-5">
              <FormFields fields={fields} />
            </div>
            <div className="flex justify-between py-2 text-sm">
              <div className="flex items-center gap-1">
                <Field
                  type="checkbox"
                  name="remember"
                  className="checkbox checkbox-xs [--chkbg:oklch(var(--a))] [--chkfg:white]"
                />
                <label
                  htmlFor="remember"
                  className="text-yellow-500 font-semibold"
                >
                  Remember Me
                </label>
              </div>
              <div className="text-error">Forgot Password?</div>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-center mt-4 py-2 font-semibold rounded-lg"
            >
              Log In
            </button>
            <div className="flex py-6 items-center">
              <hr className="flex-1 border-gray-300" />
              <div className="mx-4 text-center font-semibold text-gray-500">
                OR
              </div>
              <hr className="flex-1 border-gray-300" />
            </div>

            <div className="flex items-center justify-center gap-2 pt-2">
              <img src={google} alt="google" />
              <div>Login with Google</div>
            </div>
          </Form>
        </Formik>

        <div className="-mt-4">
          <div className="text-center md:text-right py-2 md:font-semibold">
            {activeTab === "Planner" ? "New User" : "New Vendor"}?
            <a href="/register" className="text-yellow-500 pl-2">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:bg-[url('/auth.svg')] lg:bg-no-repeat lg:bg-cover lg:block lg:col-span-2 lg:w-full lg:min-h-screen lg:h-full"></div>
    </div>
  );
};

export default Login;
