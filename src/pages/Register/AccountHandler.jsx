import React from "react";
import { FormFields } from "../../components";

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
      placeholder: "******",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "******",
    },
  ];

  return (
    <div className="grid gap-5">
      <FormFields fields={fields} />
    </div>
  );
};

export default AccountHandler;
