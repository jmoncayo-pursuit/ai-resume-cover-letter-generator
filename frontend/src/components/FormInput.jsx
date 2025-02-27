import React from 'react';

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
}) => {
  return (
    <div className='mb-4'>
      <label
        htmlFor={name}
        className='block text-gray-700 text-sm font-bold mb-2'
      >
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
    </div>
  );
};

export default FormInput;
