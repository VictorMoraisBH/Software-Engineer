import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => (
  <button className={`p-2 bg-blue-500 text-white ${className}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
