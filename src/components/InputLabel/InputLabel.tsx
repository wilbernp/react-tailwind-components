import { cva } from 'class-variance-authority';
import { IInputStatus } from '@/types';
import { cn } from '@/utils';

const inputLabelVariants = cva('mb-1 block text-sm ', {
  variants: {
    status: {
      default: 'text-gray-900',
      error: 'text-red-500',
      succes: 'text-green-500',
    },
  },
});

type InputLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  status?: IInputStatus;
};

export default function InputLabel({
  status = 'default',
  children,
  className,
  ...restProps
}: InputLabelProps) {
  return (
    <label
      {...restProps}
      className={cn(inputLabelVariants({ status, className }))}
    >
      {children}
    </label>
  );
}
