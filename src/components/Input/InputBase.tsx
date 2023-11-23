import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { InputSizes } from '@/types';

const inputVariants = cva(
  'border outline-none hover:border-gray-700 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block focus:ring-1',
  {
    variants: {
      size: {
        sm: 'px-2 sm:text-xs h-9',
        md: 'px-2.5 h-11',
        lg: 'px-4 sm:text-base h-14',
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
  size?: InputSizes;
  fullWidth?: boolean;
  paddingLeft?: InputSizes | null;
  paddingRight?: InputSizes | null;
};

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      size = 'md',
      fullWidth,
      paddingLeft,
      paddingRight,
      id,
      className,
      ...props
    },
    ref,
  ) => {
    console.log({ size });
    return (
      <input
        id={id}
        className={cn(
          inputVariants({
            size,
            className,
            fullWidth,
            paddingLeft,
            paddingRight,
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
