import React from 'react';
import PageBreadcrumb from '../template/PageBreadcrumb';

const ContactUs = () => {
  return (
    <>
      <PageBreadcrumb currentPage={'تماس با ما'} />
      <h1 className="text-center text-white font-kalamehBold text-2xl mt-8">
        تماس با ما
      </h1>

      <section className="text-white max-w-4xl bg-slate-600 px-8 py-4 rounded-md mt-4 mx-auto flex justify-between">
        <div>
          <p className="font-kalamehBold text-xl">ساعت کار فروشگاه</p>
          <ul className="list-disc mt-3 text-xl">
            <li>از ساعت 8 تا 5</li>
            <li>از شنبه تا چهارشنبه</li>
          </ul>
        </div>
        <div>
          <p className="font-kalamehBold text-xl">اطلاعات تماس</p>
          <ul className="list-disc mt-3 text-xl">
            <li>lorem@gmail.com</li>
            <li className="font-mono text-base">09121111111</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
