import { cn } from '@/utils';

type IconButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function IconButton({
  children,
  className,
  ...restProps
}: IconButtonProps) {
  const iconButtonClassNames = cn(
    'flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-400',
    className,
  );
  return (
    <button className={iconButtonClassNames} {...restProps}>
      {children}
    </button>
  );
}
