import { useState } from "react";
import { Formik, Form } from "formik";
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
            <FormFields fields={fields} />
            <button
              type="submit"
              className="w-full bg-primary text-center mt-4 py-2 font-semibold rounded-lg"
            >
              Log In
            </button>
          </Form>
        </Formik>

        <div className="-mt-4">
          <div className="flex items-center">
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

          <div className="text-center md:text-right py-2 md:font-semibold">
            New User?{" "}
            <a href="/register" className="text-primary">
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
