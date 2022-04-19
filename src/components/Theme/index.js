import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.css';

const Page = ({ children }) => {
  return (
    <main className={classnames('bg-page-x text-page-y')}>
      <div className={classnames('w-1/2 m-auto p-10 leading-loose')}>
        {children}
      </div>
    </main>
  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
