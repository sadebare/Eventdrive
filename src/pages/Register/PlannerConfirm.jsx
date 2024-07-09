import React, { useState } from 'react'
import { LogoHeader } from '../../components'
import PlannerVerify from './PlannerVerify';

const PlannerConfirm = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <PlannerVerify />
    )
  }

  return (
    <div className="md:grid md:grid-cols-5">
      <div className="align-element md:col-span-3 md:h-screen grid md:content-center items-center gap-16 py-10">
        <LogoHeader />
        <div className='place-self-center space-y-3 text-center'>
          <h1 className='font-bold text-3xl'>Check Your Email</h1>
          <p className='text-lg text-gray-400 px-8'>We have sent a verification code to your email</p>
        </div>
        <button onClick={handleConfirm} className='place-self-center w-full md:w-2/5 bg-primary text-center text-xl mt-4 py-4 font-semibold rounded-lg'>Enter Code</button>
      </div>
      <div className="hidden lg:bg-[url('/auth.svg')] lg:bg-no-repeat lg:bg-cover lg:block lg:col-span-2 lg:w-full lg:min-h-screen lg:h-full"></div>
    </div>
  )
}

export default PlannerConfirm