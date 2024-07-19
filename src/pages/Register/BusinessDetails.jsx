import React from "react";
import { FormFields } from "../../components";

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
      name: "businessPhone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Phone Number",
    },
    {
      name: "service",
      label: "What Service Are You Interested in?",
      type: "radio",
      options: [
        { label: "Register as a vendor", value: "vendor" },
        { label: "Register as a venue owner", value: "owner" },
      ],
    },
    {
      name: "businessType",
      label: "Business Type",
      type: "select",
      options: [
        { label: "Photography", value: "photography" },
        { label: "Catering", value: "catering" },
        { label: "Interior Decoration", value: "interiorDecoration" },
        { label: "MC", value: "mc" },
        { label: "Event Planner", value: "eventPlanner" },
      ],
    },
    {
      name: "country",
      label: "Country",
      type: "select",
      options: [
        { label: "USA", value: "usa" },
        { label: "Canada", value: "canada" },
        // Add more countries as needed
      ],
    },
    {
      name: "state",
      label: "State/Province",
      type: "select",
      options: [
        { label: "California", value: "ca" },
        { label: "New York", value: "ny" },
        // Add more states/provinces as needed
      ],
    },
    {
      name: "localGovernment",
      label: "LGA",
      type: "select",
      options: [
        { label: "District 1", value: "district1" },
        { label: "District 2", value: "district2" },
        // Add more local governments as needed
      ],
    },
    {
      name: "city",
      label: "City",
      type: "text",
      placeholder: "City",
    },
    {
      name: "zipCode",
      label: "ZIP Code",
      type: "text",
      placeholder: "ZIP Code",
    },
    {
      name: "streetAddress",
      label: "Street Address",
      type: "text",
      placeholder: "Street Address",
    },
  ];

  return (
    <div className="grid gap-5">
      <FormFields fields={fields.filter(field => field.name === "businessName" || field.name === "businessEmail" || field.name === "businessPhone" || field.name === "service" || field.name === "businessType")} />
      <div className="grid grid-cols-2 gap-5">
        <FormFields fields={fields.filter(field => field.name === "country" || field.name === "state")} />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <FormFields fields={fields.filter(field => field.name === "localGovernment" || field.name === "city" || field.name === "zipCode")} />
      </div>
      <div>
        <FormFields fields={fields.filter(field => field.name === "streetAddress")} />
      </div>
    </div>
  );
};

export default BusinessDetails;
