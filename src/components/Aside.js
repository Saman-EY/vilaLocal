import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AsideFilter } from './Filter';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { allVilas } from '../services/Datas';

const Aside = () => {
  return (
    <aside
      id="aside"
      className="text-gray-200  pb-10 border-2 w-full border-slate-200 flex flex-col gap-5 px-5 "
    >
      <AsideFilter  />

      <section className="sticky top-28">
        <div>
          <p className="font-kalamehBold border-b-2 border-Gold pb-2 text-lg whitespace-nowrap text-center ">
            ویلا های برگزیده
          </p>
        </div>

        {/* slider  */}
        {allVilas && (
          <section className="mt-5">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop
              className="mySwiper"
            >
              {allVilas.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-200 rounded-md overflow-hidden">
                    <Link to={`/category/${item.id}`}>
                      <img
                        className="w-full h-[15rem]"
                        src={item.img}
                        alt="viila"
                      />
                    </Link>
                    <div className="flex flex-col justify-center items-center p-2">
                      <p className="text-lg font-kalamehBold text-slate-500">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1 text-[.8rem] my-1">
                        {`زمین ${item.meterage_building} متر , بنا ${item.meterage_house} متر , ${item.number_room} اتاق`}
                      </p>
                      <Link
                        to={`/category/${item.id}`}
                        className="border text-white bg-Gold  transition-all w-full text-center rounded-b-md py-1"
                      >
                        مشاهده ویلا
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}
      </section>
    </aside>
  );
};

export default Aside;
