import React from 'react';
import { InputContext } from './InputContext';
import { InputSizes } from '@/types';

interface InputProviderProps {
  children?: React.ReactElement;
  size?: InputSizes;
}

export default function InputProvider({ children, size }: InputProviderProps) {
  return (
    <InputContext.Provider value={{ size }}>{children}</InputContext.Provider>
  );
}
