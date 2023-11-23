import * as React from 'react';

import { cn } from '@/utils';
import { InputProvider } from '@/context/input';
import { InputSizes } from '@/types';
import { InputLabel } from '../InputLabel';
import { InputSupportingText } from '../InputSupportingText';
import InputBase from './InputBase';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: InputSizes;
  fullWidth?: boolean;
  leftAdornment?: JSX.Element;
  rightAdornment?: JSX.Element;
  label?: string;
  // supportingText;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = 'md',
      fullWidth,
      leftAdornment,
      rightAdornment,
      label,
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
          <InputSupportingText></InputSupportingText>
        </div>
      </InputProvider>
    );
  },
);
Input.displayName = 'Input';

export default Input;
