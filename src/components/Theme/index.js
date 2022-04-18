import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Page = ({ children }) => {
  return <main>{children}</main>;
};

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
