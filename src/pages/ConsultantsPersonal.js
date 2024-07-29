import React, { useState, useEffect } from 'react';
import tempImg from '../assets/images/blank-profile-picture.svg';
import { useParams } from 'react-router-dom';
import Card from '../template/Card';
import LoadingOverlay from '../template/LoadingOverlay';
import { consultants, newVilaData } from '../services/Datas';

const ConsultantsPersonal = () => {
  let id = useParams().id;

  let data = consultants.find((item) => item.id === +id);
  let viladatas = newVilaData.slice(0, 3);

  return (
    <>
      {console.log(data)}
      {data && (
        <section className="max-w-7xl  mx-auto my-10 p-4 ">
          <section className="bg-slate-600 text-slate-200 rounded-md mt-4 max-w-2xl mx-auto flex">
            <img
              className=" max-w-[200px] rounded-md"
              src={tempImg}
              alt="avatar"
            />

            <section className="p-4">
              <p className=" font-kalamehBold text-xl text-slate-400">
                اطلاعات
              </p>
              <div className="font-kalamehBold flex  gap-4 text-lg mb-7">
                <p>نام: {data.name}</p>
                <p>شماره: {data.phone}</p>
              </div>

              <p className=" font-kalamehBold text-xl text-slate-400">توضیات</p>
              <div className="font-kalamehBold text-lg">
                {data.description ? (
                  <>
                    <p>{data.description}</p>
                  </>
                ) : (
                  <p>توضیحاتی ثبت نشده است !</p>
                )}
              </div>
            </section>
          </section>

          <p className="text-slate-200 font-bold text-xl text-center mt-7 mb-4">
            ویلا های ثبت شده
          </p>
          <section
            className="flex items-center justify-center gap-3"
          >
            {
              viladatas.map((item,index) =>  <Card key={index} data={item}  />)
            }
            
          </section>
        </section>
      )}
    </>
  );
};

export default ConsultantsPersonal;
