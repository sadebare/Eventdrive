import { CircularProgress, LogoHeader } from "../components";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";

const Verify = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [enterCode, setEnterCode] = useState(false);

  let progress = useMotionValue(90);

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

  const handleCode = () => {
    setEnterCode(true);
  };

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
      <div className="grid md:grid-cols-5">
        <div className="align-element md:col-span-3 h-screen grid content-center items-center gap-16 py-10">
          <LogoHeader />
          <div className="place-self-center grid space-y-3 text-center">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 100 }}
              style={{ x: progress }}
              transition={{ duration: 1 }}
            />
            <div className="place-self-center pb-5">
              <CircularProgress progress={progress} />
            </div>
            <h1 className="font-bold text-3xl">Account Verified</h1>
            <p className="text-lg text-gray-400 px-8">
              Your account has been verified successfully
            </p>
          </div>
          <Link
            to="/login"
            className="place-self-center text-yellow-500 text-center text-2xl font-medium rounded-lg"
          >
            Go Back to Log In
          </Link>
        </div>
        <div className="hidden lg:bg-[url('/auth.svg')] lg:bg-no-repeat lg:bg-cover lg:block lg:col-span-2 lg:w-full lg:min-h-screen lg:h-full"></div>
      </div>
    );
  }

  if (!enterCode) {
    return (
      <div className="grid md:grid-cols-5">
        <div className="align-element md:col-span-3 h-screen grid content-center items-center gap-16 py-10">
          <LogoHeader />
          <div className="place-self-center space-y-3 text-center">
            <h1 className="font-bold text-3xl">Check Your Account</h1>
            <p className="text-lg text-gray-400 px-8">
              We have sent a verification code sent to your email
            </p>
          </div>
          <div
            onClick={handleCode}
            className="place-self-center w-full -mt-4 md:w-2/5 bg-yellow-500 text-center text-xl py-4 font-semibold rounded-lg"
          >
            Enter Code
          </div>
        </div>
        <div className="hidden lg:bg-[url('/auth.svg')] lg:bg-no-repeat lg:bg-cover lg:block lg:col-span-2 lg:w-full lg:min-h-screen lg:h-full"></div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-5">
      <div className="align-element md:col-span-3 h-screen grid content-center items-center gap-16 py-10">
        <LogoHeader />
        <div className="place-self-center space-y-3 text-center">
          <h1 className="font-bold text-3xl">Verify Your Account</h1>
          <p className="text-lg text-gray-400 px-8">
            Fill the verification code sent to your email
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="flex gap-2 md:gap-4 pt-6"
            autoComplete="off"
          >
            {formik.values.code.map((_, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                maxLength="1"
                pattern="\d*"
                value={formik.values.code[index]}
                onChange={(e) => handleInputChange(e, index)}
                className="inline-flex items-center justify-center rounded-md w-12 h-12 md:w-14 md:h-14 text-lg text-center bg-gray-100 outline-yellow-500 border"
              />
            ))}
          </form>
        </div>
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className="place-self-center w-full -mt-4 md:w-2/5 bg-yellow-500 text-center text-xl py-4 font-semibold rounded-lg"
        >
          Verify Account
        </button>
      </div>
      <div className="hidden lg:bg-[url('/auth.svg')] lg:bg-no-repeat lg:bg-cover lg:block lg:col-span-2 lg:w-full lg:min-h-screen lg:h-full"></div>
    </div>
  );
};

export default Verify;
