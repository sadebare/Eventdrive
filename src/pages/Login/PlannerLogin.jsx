const PlannerLogin = () => {
  return (
    <>
      <div className="grid gap-2">
        <label htmlFor="" className="font-semibold">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          className="outline-gray-300 bg-gray-50 h-10 pl-2 rounded-md outline-none"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="" className="font-semibold">
          Password
        </label>
        <input
          type="text"
          placeholder="Enter Your Password"
          className="outline-gray-300 bg-gray-50 h-10 pl-2 rounded-md outline-none"
        />
      </div>
    </>
  )
}

export default PlannerLogin