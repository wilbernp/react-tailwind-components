import { useContext } from 'react';
import { InputContext } from './InputContext';

export function useInputContext() {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('useInputContext must be used within InputProvider');
  }

  return context;
}
