import React from 'react';
import { ButtonProps } from '../../interfaces';

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const shapeClasses: Record<'rounded-sm' | 'rounded-md' | 'rounded-full', string> = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const Button: React.FC<ButtonProps & { shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full' }> = ({
  children,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shapeClasses[shape as keyof typeof shapeClasses]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;