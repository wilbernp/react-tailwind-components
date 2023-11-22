import { cn } from '@/utils';
import { cva } from 'class-variance-authority';

type IconButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
};
const iconButtonVariants = cva(
  'flex items-center justify-center rounded-full hover:bg-gray-400',
  {
    defaultVariants: {
      size: 'md',
    },
    variants: {
      size: {
        sm: 'h-6 w-6',
        md: 'h-7 w-7 p-1',
        lg: 'h-10 w-10 p-2',
      },
    },
  },
);
export default function IconButton({
  children,
  className,
  size,
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
