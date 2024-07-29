import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DArrow } from '../assets/icons/angles-left-solid.svg';

const PageBreadcrumb = ({currentPage}) => {
  return (
    <div className="CategoryTitle font-kalamehBold">
      <Link to={'/'}>خانه</Link>
      <DArrow width={'13px'} fill={'currentColor'} />
      <span>{currentPage}</span>
    </div>
  );
};

export default PageBreadcrumb;
