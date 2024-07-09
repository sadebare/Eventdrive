import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { FormFields } from "../../components";

const validationSchema = Yup.object({
  businessName: Yup.string().required("Business Name is required"),
  businessEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  // ...
});

const initialValues = {
  businessName: "",
  businessEmail: "",
  phone: "",
  // ...
};

const BusinessDetails = () => {
  const fields = [
    {
      name: "businessName",
      label: "Business Name",
      type: "text",
      placeholder: "Business name",
    },
    {
      name: "businessEmail",
      label: "Business Email Address",
      type: "email",
      placeholder: "Your Business Email",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Phone Number",
    }
    // ...
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
            <Field 
              type="radio"
              name="service"
              className="w-3 checked:bg-primary"
            />
          </div>
          <button
            type="submit"
            className="w-fit bg-primary mt-4 px-4 py-2 font-semibold rounded-lg"
          >
            Save & Continue
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BusinessDetails;
