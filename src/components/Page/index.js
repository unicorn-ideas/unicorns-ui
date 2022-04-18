import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

const Page = ({ children }) => {
  return <main className={classnames('bg-slate-600')}>{children}</main>;
};

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
