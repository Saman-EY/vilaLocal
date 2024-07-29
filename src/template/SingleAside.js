import React from 'react';
import BlankProf from '../assets/images/blank-profile-picture.svg';
import { consultants } from '../services/Datas';

const SingleAside = () => {
  return (
    <>
      <section className="w-full max-w-[280px] mx-auto ">
        <div className="flex flex-col gap-2  sticky top-32">
          <img
            className="rounded-full w-[150px] mx-auto mb-2"
            src={BlankProf}
            alt=""
          />

          <div className="flex gap-2 justify-between">
            <p className="bg-slate-400 flex-1 text-black  rounded-md p-2 text-center font-kalamehBold">
              نام : {consultants[0].name}
            </p>
            <p className="bg-slate-400 flex-1 text-black  rounded-md p-2 text-center font-kalamehBold">
              تلفن : {consultants[0].phone}
            </p>
          </div>
          <p className="bg-slate-400 text-black  rounded-md p-2 text-center font-kalamehBold">
            {consultants[0].description ? (
              consultants[0].description
            ) : (
              <span>توضیحاتی ثبت نشده است!</span>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default SingleAside;
