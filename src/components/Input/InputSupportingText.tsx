import { cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { IInputStatus } from '@/types';

const inputSupportingTextVariants = cva('text-xs block h-4 mt-1', {
  variants: {
    status: {
      default: 'text-gray-900',
      error: 'text-red-500',
      succes: 'text-green-500',
    },
  },
});

type InputSupportingTextProps = React.HTMLAttributes<HTMLSpanElement> & {
  status?: IInputStatus;
};

export default function InputSupportingText({
  children,
  status = 'default',

  className,
  ...restProps
}: InputSupportingTextProps) {
  return (
    <span
      {...restProps}
      className={cn(inputSupportingTextVariants({ status, className }))}
    >
      {children}
    </span>
  );
}
