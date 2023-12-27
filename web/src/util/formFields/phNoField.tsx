import { ErrorMessage } from 'formik'
import React from 'react'
import NumberFormat from 'react-number-format'
import Select from 'react-select'

export const PhoneNoField = ({
  onChange,
  options,
  value,
  name,
  label,
  className,
  labelSize,
  textSize,
  txtPad
}) => {
  return (
    <div className={className}>
      <label className={`label font-regular  mb-2 ${labelSize === undefined ? 'text-sm': labelSize}`}>{label}</label>
      <NumberFormat
        // label="Mobile No*"
        className={`w-full min-w-full flex bg-grey-lighter text-grey-darker border border-[#cccccc] rounded-md h-[2rem] px-4 mt-1 ${textSize} ${txtPad}`}
        name="mobileNo"
        value={value}
        onValueChange={(value) => {
          onChange(value)
        }}
        format="###-###-####"
        mask=""
      />
      <ErrorMessage
        component="div"
        name={name}
        className="error-message text-red-700 text-xs px-1 mt-1"
      />
    </div>
  )
}
