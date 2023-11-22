import { InputSizes } from '@/types';
import React from 'react';
import { InputContext } from './InputContext';

interface InputProviderProps {
  children?: React.ReactElement;
  size?: InputSizes;
}

export default function InputProvider({ children, size }: InputProviderProps) {
  return (
    <InputContext.Provider value={{ size }}>{children}</InputContext.Provider>
  );
}
