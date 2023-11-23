import { cn } from '@/utils';
import { cva } from 'class-variance-authority';

const inputSupportingTextVariants = cva('text-xs', {
  defaultVariants: {
    color: 'error',
  },
  variants: {
    color: {
      error: 'text-red-500',
      succes: 'text-green-500',
    },
  },
});

type InputSupportingTextProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: 'error' | 'succes';
};

export default function InputSupportingText({
  children,
  color,
  className,
  ...restProps
}: InputSupportingTextProps) {
  return (
    <span
      {...restProps}
      className={cn(inputSupportingTextVariants({ color, className }))}
    >
      {children}
    </span>
  );
}
