const FormInput = ({ name, type, value, handleChange, size, labelText }) => {
  return (
    <div>
      <label className="form-control">
        <div className="label">
          <span className="label-text capitalize font-semibold">
            {labelText || name}
          </span>
        </div>
        <input 
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className={`input input-bordered input-primary ${size}`}
        />
      </label>
    </div>
  )
}

export default FormInput