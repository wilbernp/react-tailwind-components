import { InputSizes } from '@/types';
import { createContext } from 'react';

interface IInputContext {
  size?: InputSizes;
}

export const InputContext = createContext<IInputContext | undefined>(undefined);
