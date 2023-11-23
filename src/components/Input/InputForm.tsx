import * as React from 'react';
import InputBase from './InputBase';
import { InputLabel } from '../InputLabel';
import { InputSupportingText } from '../InputSupportingText';
import { cn } from '@/utils';
import { InputProvider } from '@/context/input';
import { IInputSizes, IInputStatus } from '@/types';

type InputFormProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  size?: IInputSizes;
  status?: IInputStatus;
  fullWidth?: boolean;
  leftAdornment?: JSX.Element;
  rightAdornment?: JSX.Element;
  label?: string;
  supportingText?: string;
};

const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
  (
    {
      className,
      size = 'md',
      status = 'default',
      fullWidth,
      leftAdornment,
      rightAdornment,
      label,
      supportingText,
      id,
      ...restProps
    },
    ref,
  ) => {
    const inputContainerClasses = cn('w-max relative', { 'w-full': fullWidth });
    return (
      <InputProvider size={size}>
        <div>
          {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
          <div className={inputContainerClasses}>
            {leftAdornment}
            <InputBase
              paddingLeft={leftAdornment && size}
              paddingRight={rightAdornment && size}
              {...restProps}
              ref={ref}
              size={size}
              className={cn(className)}
              fullWidth
            />
            {rightAdornment}
          </div>
          <InputSupportingText status={status}>
            {supportingText}
          </InputSupportingText>
        </div>
      </InputProvider>
    );
  },
);
InputForm.displayName = 'InputForm';

export default InputForm;
