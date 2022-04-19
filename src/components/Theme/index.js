import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Page = ({ children }) => {
  return (
    <main className="text-blue-900 bg-slate-700">
      <h1 style={{ color: 'red' }}>Hello world!</h1>
      {children}
    </main>
  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
