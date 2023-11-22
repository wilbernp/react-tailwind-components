import { cn } from '@/utils';
import React from 'react';

interface InputAdornmentProps {
  position: 'start' | 'end';
  children?: React.ReactElement;
}

export default function InputAdornment({
  position,
  children,
}: InputAdornmentProps) {
  const inputAdornmentClassNames = cn(
    'absolute inset-y-0 h-max w-max my-auto cursor-text',
    {
      'left-1': position === 'start',
      'right-1': position === 'end',
    },
  );
  return <div className={inputAdornmentClassNames}>{children}</div>;
}
