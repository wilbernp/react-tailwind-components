import { cva } from 'class-variance-authority';
import React from 'react';
import { useInputContext } from '@/context/input';
import { cn } from '@/utils';

type InputAdornamentPositions = 'left' | 'right';

interface InputAdornmentProps {
  position?: InputAdornamentPositions;
  children?: React.ReactNode;
}

const inputAdornmentVariants = cva(
  'absolute flex justify-center items-center text-gray-600 inset-y-0 my-auto cursor-text',
  {
    defaultVariants: {
      size: 'md',
      position: 'right',
    },
    variants: {
      position: {
        left: 'left-1',
        right: 'right-1',
      },
      size: {
        sm: ' h-6 w-6',
        md: 'h-7 w-7',
        lg: 'h-9 w-9',
      },
    },
  },
);

export default function InputAdornment({
  position,
  children,
}: InputAdornmentProps) {
  const { size } = useInputContext();
  return (
    <div className={cn(inputAdornmentVariants({ position, size }))}>
      {children}
    </div>
  );
}
