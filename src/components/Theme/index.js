import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.css';

const Page = ({ children }) => {
  return (
    <main className={classnames('bg-slate-600')}>
      <div className={classnames('w-1/2 m-auto p-10')}>{children}</div>
    </main>
  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
