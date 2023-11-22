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
  'absolute inset-y-0 h-max w-max my-auto cursor-text',
  {
    variants: {
      position: {
        left: 'left-1',
        right: 'right-1',
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
    <div className={cn(inputAdornmentVariants({ position }))}>{children}</div>
  );
}
