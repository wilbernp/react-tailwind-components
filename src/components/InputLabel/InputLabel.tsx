import React from 'react';

type InputLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function InputLabel({
  children,
  ...restProps
}: InputLabelProps) {
  return (
    <label {...restProps} className="mb-2 block text-sm text-gray-900">
      {children}
    </label>
  );
}
