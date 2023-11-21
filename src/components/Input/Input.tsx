import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const inputVariants = cva(
  'border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block focus:ring-1',
  {
    variants: {
      size: {
        sm: 'px-2 sm:text-xs h-8',
        md: 'px-2.5 h-10',
        lg: 'px-4 sm:text-md h-14',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

type InputPropsBase = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

type InputProps = InputPropsBase &
  VariantProps<typeof inputVariants> & {
    fullWidth?: boolean;
    startAdornment?: JSX.Element;
    endAdornment?: JSX.Element;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size,
      fullWidth,
      startAdornment,
      endAdornment,
      ...props
    },
    ref,
  ) => {
    const cnButton = cn({ 'w-full': !!fullWidth });
    return (
      <div className="relative">
        {
          <div className="pointer-events-none absolute inset-y-0 left-2 my-auto flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-400">
            <div className="h-6 w-6 rounded-full bg-gray-700"></div>
          </div>
        }
        <input
          type={type}
          className={cn(inputVariants({ size, className }), cnButton)}
          ref={ref}
          {...props}
        />
        {startAdornment && <div>{startAdornment}</div>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
