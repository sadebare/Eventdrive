import * as Yup from "yup";
import { Form, Formik } from "formik";
import { FormFields } from "../../components";

const validationSchema = Yup.object({
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

const initialValues = {
  contactPerson: "",
  username: "",
  email: "",
  phone: "",
  role: "",
  password: "",
  confirmPassword: "",
};

const AccountHandler = () => {
  const fields = [
    {
      name: "contactPerson",
      label: "Contact Person",
      type: "text",
      placeholder: "Full name",
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Email Address",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Phone Number",
    },
    {
      name: "role",
      label: "Role",
      type: "text",
      placeholder: "Your Role in the Business",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "******"
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "******"
    },
  ];

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Business Information</h1>
      <p className="text-gray-500">
        Etiam accumsan lorem leo, non aliquet ipsum mattis non. Suspendisse
        laoreet non turpis in tempus.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid md:grid-cols-2 gap-5">
            <FormFields fields={fields} />
          </div>
          <button
            type="submit"
            className="w-fit bg-primary self-end mt-8 px-4 py-2 font-semibold rounded-lg"
          >
            Continue
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AccountHandler;
