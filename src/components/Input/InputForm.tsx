import * as React from 'react';
import InputBase from './InputBase';
import { cn } from '@/utils';
import { InputProvider } from '@/context/input';
import { IInputSizes, IInputStatus } from '@/types';
import InputLabel from './InputLabel';
import InputSupportingText from './InputSupportingText';

type InputFormProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  size?: IInputSizes;
  status?: IInputStatus;
  fullWidth?: boolean;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  label?: string;
  supportingText?: string;
};

const InputForm = React.forwardRef<HTMLInputElement, InputFormProps>(
  (
    {
      className,
      size = 'md',
      status,
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
          {label && (
            <InputLabel status={status} htmlFor={id}>
              {label}
            </InputLabel>
          )}
          <div className={inputContainerClasses}>
            {leftAdornment}
            <InputBase
              {...restProps}
              ref={ref}
              className={cn(className)}
              size={size}
              status={status}
              fullWidth
              paddingLeft={leftAdornment ? size : null}
              paddingRight={rightAdornment ? size : null}
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
