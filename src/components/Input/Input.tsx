import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { InputProvider } from '@/context/input';
import { InputSizes } from '@/types';

type InputPropsBase = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

type InputProps = InputPropsBase & {
  size?: InputSizes;
  fullWidth?: boolean;
  leftAdornment?: JSX.Element;
  rightAdornment?: JSX.Element;
};

const inputVariants = cva(
  'border outline-none hover:border-gray-700 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block focus:ring-1',
  {
    defaultVariants: {
      size: 'md',
      withLeftAdornment: false,
      withRightAdornment: false,
    },
    variants: {
      size: {
        sm: 'px-2 sm:text-xs h-9',
        md: 'px-2.5 h-11',
        lg: 'px-4 sm:text-md h-14',
      },
      withLeftAdornment: { false: 'px-4' },
      withRightAdornment: { false: 'px-4' },
    },
    compoundVariants: [
      { size: 'lg', withLeftAdornment: true, className: 'pl-12' },
      { size: 'lg', withRightAdornment: true, className: 'pr-12' },
      { size: 'md', withLeftAdornment: true, className: 'pl-9' },
      { size: 'md', withRightAdornment: true, className: 'pr-9' },
      { size: 'sm', withLeftAdornment: true, className: 'pl-8' },
      { size: 'sm', withRightAdornment: true, className: 'pr-8' },
    ],
  },
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size,
      fullWidth,
      leftAdornment,
      rightAdornment,
      ...props
    },
    ref,
  ) => {
    const buttonClassNames = cn({ 'w-full': !!fullWidth });

    const withLeftAdornment = leftAdornment !== undefined;
    const withRightAdornment = rightAdornment !== undefined;
    return (
      <InputProvider size={size}>
        <div className="relative w-max">
          {leftAdornment}
          <input
            type={type}
            className={cn(
              inputVariants({
                size,
                className,
                withLeftAdornment,
                withRightAdornment,
              }),
              buttonClassNames,
            )}
            ref={ref}
            {...props}
          />
          {rightAdornment}
        </div>
      </InputProvider>
    );
  },
);
Input.displayName = 'Input';

export { Input };
