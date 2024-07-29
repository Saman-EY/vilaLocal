import React, { useState } from 'react';
// Icon
// components
import Aside from '../components/Aside';
import CardContainer from '../components/CardContainer';
import { Filter } from '../components/Filter';
import PageBreadcrumb from '../template/PageBreadcrumb';

const Category = () => {
  return (
    <>
      <PageBreadcrumb currentPage="لیست ویلا ها" />
      <Filter />
      <section className="flex flex-col-reverse Break2:flex-row gap-5 max-w-6xl mx-auto px-4">
        <Aside />
        <CardContainer />
      </section>
    </>
  );
};

export default Category;
