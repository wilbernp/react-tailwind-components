import { cva } from 'class-variance-authority';
import { cn } from '@/utils';

type IconButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
};
const iconButtonVariants = cva(
  'flex items-center text-gray-600 justify-center rounded-full hover:bg-gray-200',
  {
    defaultVariants: {
      size: 'md',
    },
    variants: {
      size: {
        sm: 'h-6 w-6',
        md: 'h-7 w-7',
        lg: 'h-9 w-9',
      },
    },
  },
);
export default function IconButton({
  size,
  children,
  className,
  ...restProps
}: IconButtonProps) {
  return (
    <button
      className={cn(iconButtonVariants({ className, size }))}
      {...restProps}
    >
      {children}
    </button>
  );
}
