import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { IInputSizes, IInputStatus } from '@/types';

const inputVariants = cva(
  'border outline-none text-gray-900 placeholder-gray-500 hover:border-gray-700 text-sm rounded-lg block focus:ring-1',
  {
    variants: {
      size: {
        sm: 'px-2 sm:text-xs h-9',
        md: 'px-2.5 h-11',
        lg: 'px-4 sm:text-base h-14',
      },
      status: {
        default: 'border-gray-400 focus:ring-blue-500 focus:border-blue-500',
        error:
          'border-red-500 caret-red-500 focus:ring-red-500 focus:border-red-500',
        succes:
          'border-green-500 caret-green-500 focus:ring-green-500 focus:border-green-500',
      },
      paddingLeft: {
        sm: 'pl-8',
        md: 'pl-9',
        lg: 'pl-12',
      },
      paddingRight: {
        sm: 'pr-8',
        md: 'pr-9',
        lg: 'pr-12',
      },
      fullWidth: { true: 'w-full' },
    },
  },
);

type InputBaseProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  size?: IInputSizes;
  status?: IInputStatus;
  fullWidth?: boolean;
  paddingLeft?: IInputSizes | null;
  paddingRight?: IInputSizes | null;
};

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      size = 'md',
      status = 'default',
      fullWidth,
      paddingLeft,
      paddingRight,
      id,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        id={id}
        className={cn(
          inputVariants({
            size,
            status,
            fullWidth,
            paddingLeft,
            paddingRight,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
InputBase.displayName = 'InputBase';

export default InputBase;
