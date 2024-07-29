import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlankImg from '../assets/images/blank-profile-picture.svg';
import LoadingOverlay from '../template/LoadingOverlay';
import PageBreadcrumb from '../template/PageBreadcrumb';
import { consultants } from '../services/Datas';

const Consultants = () => {

  return (
    <>
     
          <PageBreadcrumb currentPage={'مشاوران'} />
          <section className="p-4">
            <div className="p-4 mx-auto max-w-5xl grid justify-items-center grid-cols-1 Break3:grid-cols-2  md:!grid-cols-4 gap-4">
              {consultants.map((item, index) => (
                <Link
                  key={index}
                  to={`/consultantsPersonal/${item.id}`}
                  className="bg-slate-300 w-fit rounded-md overflow-hidden"
                >
                  {item.avatar ? (
                    <img
                      className="w-full h-full max-h-52"
                      src={`http://app.aliqomi.ir/${item.avatar}`}
                      alt="avatar"
                    />
                  ) : (
                    <img
                      className="w-[full] Break3:max-h-[250px]"
                      src={BlankImg}
                      alt="avatar"
                    />
                  )}

                  <div className="py-2 px-4 flex flex-col gap-1 font-kalamehBold">
                    <p>نام : {item.name}</p>
                    <p>شماره : {item.phone}</p>
                    {item.description ? (
                      <p>{item.description}</p>
                    ) : (
                      <p>توضیحاتی ثبت نشده است!</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
    </>
  );
};

export default Consultants;
