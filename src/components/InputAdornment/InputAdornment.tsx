import { useInputContext } from '@/context/input';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

type InputAdornamentPositions = 'left' | 'right';

interface InputAdornmentProps {
  position: InputAdornamentPositions;
  children?: React.ReactElement;
}

const inputAdornmentVariants = cva(
  'absolute flex justify-center items-center inset-y-0 my-auto cursor-text',
  {
    defaultVariants: {
      size: 'md',
    },
    variants: {
      position: {
        left: 'left-1',
        right: 'right-1',
      },
      size: {
        sm: ' h-6 w-6',
        md: 'h-7 w-7',
        lg: 'h-10 w-10',
      },
    },
  },
);

export default function InputAdornment({
  position,
  children,
}: InputAdornmentProps) {
  const { size } = useInputContext();
  console.log({ size });

  return (
    <div className={cn(inputAdornmentVariants({ position, size }))}>
      {children}
    </div>
  );
}
