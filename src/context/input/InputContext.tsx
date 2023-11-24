import { createContext } from 'react';
import { InputSizes } from '@/types';

interface IInputContext {
  size?: InputSizes;
}

export const InputContext = createContext<IInputContext | undefined>(undefined);
