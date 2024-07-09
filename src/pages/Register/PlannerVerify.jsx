import { FaCheck } from "react-icons/fa";
import { LogoHeader } from "../../components";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const PlannerVerify = () => {
  const [isVerified, setIsVerified] = useState(false);

  const formik = useFormik({
    initialValues: {
      code: ["", "", "", "", "", ""],
    },
    validationSchema: Yup.object({
      code: Yup.array()
        .of(
          Yup.string()
            .required("Required")
            .matches(/^\d$/, "Must be a single digit")
        )
        .min(6, "Code must be 6 digits"),
    }),
    onSubmit: (values) => {
      setIsVerified(true);
    },
  });

  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newCode = [...formik.values.code];
    newCode[index] = value;
    formik.setFieldValue("code", newCode);
    if (value && index < 5) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  if (isVerified) {
    return (
      <div className="md:grid md:grid-cols-5">
        <div className="align-element md:col-span-3 md:h-screen grid md:content-center items-center gap-16 py-10">
          <LogoHeader />
          <div className="place-self-center space-y-3 text-center">
            <div className="border-4 border-green-500 text-green-500 mx-auto rounded-full w-fit p-4">
              <FaCheck size={50} />
            </div>
            <h1 className="font-bold text-3xl">Account Verified</h1>
            <p className="text-lg text-gray-400 px-8">
              Your account has been verified successfully 
            </p>
          </div>
          <a 
            href="/login"
            className="place-self-center text-primary text-center text-2xl mt-4 py-4 font-semibold rounded-lg"
          >
            Go Back to Log In
          </a>
        </div>
        <div className="hidden lg:bg-[url('/auth.svg')] lg:bg-no-repeat lg:bg-cover lg:block lg:col-span-2 lg:w-full lg:min-h-screen lg:h-full"></div>
      </div>
    );
  }

  return (
    <div className="md:grid md:grid-cols-5">
      <div className="align-element md:col-span-3 md:h-screen grid md:content-center items-center gap-16 py-10">
        <LogoHeader />
        <div className="place-self-center space-y-3 text-center">
          <h1 className="font-bold text-3xl">Verify Your Account</h1>
          <p className="text-lg text-gray-400 px-8">
            Fill the verification code sent to your email
          </p>
          <form onSubmit={formik.handleSubmit} className="flex gap-2 md:gap-4 pt-6" autoComplete="off">
            {formik.values.code.map((_, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                maxLength="1"
                pattern="\d*"
                value={formik.values.code[index]}
                onChange={(e) => handleInputChange(e, index)}
                className="inline-flex items-center justify-center rounded-md w-12 h-12 md:w-14 md:h-14 text-lg text-center outline-primary border"
              />
            ))}
          </form>
        </div>
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className="place-self-center w-full -mt-4 md:w-2/5 bg-primary text-center text-xl py-4 font-semibold rounded-lg"
        >
          Verify Account
        </button>
      </div>
      <div className="hidden lg:bg-[url('/auth.svg')] lg:bg-no-repeat lg:bg-cover lg:block lg:col-span-2 lg:w-full lg:min-h-screen lg:h-full"></div>
    </div>
  );
};

export default PlannerVerify;
