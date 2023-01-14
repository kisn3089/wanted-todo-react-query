import React, { useCallback } from 'react';

export const useTodo = () => {
  const todoClick = useCallback((e: React.MouseEvent) => {
    const { id } = e.target as HTMLInputElement;
    console.log(id);
  }, []);
  return { todoClick };
};
