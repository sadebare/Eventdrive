import { FormFields } from '../../components';

const PlannerRegister = () => {
  const fields = [
    {
      name: "name",
      label: "Full name", 
      type: "text",
      placeholder: "Full name"
    },
    {
      name: "username",
      label: "Username", 
      type: "text",
      placeholder: "Username"
    },
    {
      name: "email",
      label: "Email Address", 
      type: "email",
      placeholder: "Email"
    },
    {
      name: "phone",
      label: "Phone Number", 
      type: "tel",
      placeholder: "Phone Number"
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

  return (
    <>
      <FormFields fields={fields} />
    </>
  );
};

export default PlannerRegister;
