import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils';

type InputPropsBase = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

type InputProps = InputPropsBase & {
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
};

function getButtonVariants({
  startAdornmen,
  endAdornment,
}: {
  startAdornmen: boolean;
  endAdornment: boolean;
}) {
  return cva(
    'border outline-none hover:border-gray-700 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block focus:ring-1',
    {
      variants: {
        size: {
          sm: 'px-2 sm:text-xs h-8',
          md: 'px-2.5 h-10',
          lg: cn('px-4 sm:text-md h-14', {
            'pl-12': startAdornmen, // se define el padding izquierdo del input
            'pr-12': endAdornment, // se define el padding derecho del input
          }),
        },
      },
      defaultVariants: {
        size: 'md',
      },
    },
  );
}

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
    const buttonClassNames = cn({ 'w-full': !!fullWidth });

    const buttonVariants = getButtonVariants({
      startAdornmen: startAdornment !== undefined,
      endAdornment: endAdornment !== undefined,
    });
    return (
      <div className="relative w-max">
        {startAdornment}
        <input
          type={type}
          className={cn(buttonVariants({ size, className }), buttonClassNames)}
          ref={ref}
          {...props}
        />
        {endAdornment}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
