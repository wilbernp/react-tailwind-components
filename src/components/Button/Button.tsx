import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const buttonVariants = cva(
  'whitespace-nowrap text-center transition-colors ease-in-out duration-500 focus:outline-none focus:ring-2 font-medium rounded-lg disabled:pointer-events-none disabled:opacity-50',
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
        secondary: 'bg-purple-700 hover:bg-purple-700 border-purple-700',
        success: 'bg-green-700 hover:bg-green-800 border-green-700',
        danger: 'bg-yellow-400 hover:bg-yellow-500 border-yellow-400',
        error: 'bg-red-700 hover:bg-red-800 border-red-700',
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
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size, color, variant, children, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const buttonClasses = cn({ 'bg-transparent': variant === 'outlined' });
    return (
      <Comp
        className={cn(
          buttonVariants({ size, className, color, variant }),
          buttonClasses,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export default Button;
