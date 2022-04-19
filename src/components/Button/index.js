import React from 'react';
import classnames from 'classnames';

const Button = ({ children }) => {
  return (
    <button
      className={classnames(
        'bg-gradient-to-br',
        'from-button-x',
        'to-slate-700',
        'text-button-y',
        'hover:from-button-hover-z',
        'hover:text-button-hover-y',
        'font-bold',
        'text-sm',
        'py-2 ',
        'px-4 ',
        'rounded-full',
      )}
    >
      {children}
    </button>
  );
};

export default Button;
