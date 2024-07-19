import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TabSwitcher } from "../../components";
import AccountHandler from "./AccountHandler";
import BusinessDetails from "./BusinessDetails";
import Verify from "../Verify";

const accountHandlerSchema = Yup.object({
  contactPerson: Yup.string().required("Contact Person Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  role: Yup.string().required("Business Role is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const businessDetailsSchema = Yup.object({
  businessName: Yup.string().required("Business Name is required"),
  businessEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  businessPhone: Yup.string().required("Phone number is required"),
  service: Yup.string().required("Service selection is required"),
  businessType: Yup.string().required("Business type selection is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State/Province is required"),
  localGovernment: Yup.string().required("Local Government is required"),
  city: Yup.string().required("City is required"),
  zipCode: Yup.string().required("ZIP Code is required"),
  streetAddress: Yup.string().required("Street Address is required"),
});

const initialValues = {
  // Account Handler Fields
  contactPerson: "",
  username: "",
  email: "",
  phone: "",
  role: "",
  password: "",
  confirmPassword: "",
  // Business Details Fields
  businessName: "",
  businessEmail: "",
  businessPhone: "",
  service: "",
  businessType: "",
  country: "",
  state: "",
  localGovernment: "",
  city: "",
  zipCode: "",
  streetAddress: "",
};

const VendorRegister = () => {
  const [activeTab, setActiveTab] = useState("Account Details");
  const [isVerified, setIsVerified] = useState(false);
  
  const handleNextTab = (isValid, dirty) => {
    console.log(isValid || dirty);
    if (isValid || dirty) {
      setActiveTab("Business Details");
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
    setIsVerified(true);
  };

  const getValidationSchema = (activeTab) => {
    switch (activeTab) {
      case "Account Details":
        return accountHandlerSchema;
      case "Business Details":
        return businessDetailsSchema;
      default:
        return accountHandlerSchema;
    }
  };

  if (isVerified) {
    return <Verify />;
  }

  return (
    <div className="md:grid align-element">
      <div className="flex flex-col gap-8 md:w-3/5 py-10 2xl:py-[33px] md:align-element">
        <TabSwitcher
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={["Account Details", "Business Details"]}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={getValidationSchema(activeTab)}
          onSubmit={handleSubmit}
        >
          {({ validateForm, isValid, dirty }) => (
            <Form>
              {activeTab === "Account Details" ? (
                <AccountHandler />
              ) : (
                <BusinessDetails />
              )}
              {activeTab === "Account Details" ? (
                <button
                  type="button"
                  className="w-fit bg-yellow-500 self-end mt-8 px-4 py-2 font-semibold rounded-lg"
                  onClick={() => handleNextTab(validateForm)}
                  disabled={!(isValid && dirty)}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-fit bg-yellow-500 self-end mt-8 px-4 py-2 font-semibold rounded-lg"
                >
                  Submit
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default VendorRegister;
