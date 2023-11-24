import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const buttonVariants = cva(
  'whitespace-nowrap flex gap-2 items-center text-center transition-colors ease-in-out duration-500 focus:outline-none focus:ring-2 font-medium rounded-lg disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: { size: 'md', color: 'primary', variant: 'filled' },
    variants: {
      variant: {
        outlined: 'border bg-transparent hover:text-white',
        filled: 'text-white',
      },
      color: {
        primary:
          'bg-blue-700 hover:bg-blue-800 border-blue-700 focus:ring-blue-300',
        secondary:
          'bg-purple-700 hover:bg-purple-700 border-purple-700 focus:ring-purple-300',
        success:
          'bg-green-700 hover:bg-green-800 border-green-700 focus:ring-green-300',
        danger:
          'bg-yellow-400 hover:bg-yellow-500 border-yellow-400 focus:ring-yellow-300',
        error: 'bg-red-700 hover:bg-red-800 border-red-700 focus:ring-red-300',
      },
      size: {
        xs: 'px-3 h-8 text-xs',
        sm: 'px-3 h-9 text-sm',
        md: 'px-5 h-10 text-sm',
        lg: 'px-5 h-12 text-base',
        xl: 'px-6 h-[52px] text-base',
      },
    },
    // https://github.com/crswll/clb
    compoundVariants: [
      { variant: 'outlined', color: 'primary', className: 'text-blue-700' },
      { variant: 'outlined', color: 'secondary', className: 'text-purple-700' },
      { variant: 'outlined', color: 'success', className: 'text-green-700' },
      { variant: 'outlined', color: 'danger', className: 'text-yellow-400' },
      { variant: 'outlined', color: 'error', className: 'text-red-700' },
    ],
  },
);

type ButtonHTML = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

type ButtonProps = ButtonHTML &
  VariantProps<typeof buttonVariants> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      color,
      variant,
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonClasses = cn({ 'bg-transparent': variant === 'outlined' });
    return (
      <button
        className={cn(
          buttonVariants({ size, className, color, variant }),
          buttonClasses,
        )}
        ref={ref}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  },
);
Button.displayName = 'Button';

export default Button;
