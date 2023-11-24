import { useContext } from 'react';
import { InputContext } from './InputContext';

export function useInputContext() {
  const context = useContext(InputContext);
  // solo cuando éste hook no se esté usando dentro de un componente que esté envuelto por el InputProvider
  if (!context) {
    throw new Error('useInputContext must be used within InputProvider');
  }

  return context;
}
