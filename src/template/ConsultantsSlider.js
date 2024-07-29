import React from 'react';
import { Link } from 'react-router-dom';
import BlankImg from '../assets/images/blank-profile-picture.svg';
import { consultants } from '../services/Datas';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [];

const ConsultantsSlider = () => {
  return (
    <>
      <div className="mb-4">
        <p className="text-white mx-auto mb-2 font-bold text-xl w-fit">
          مشاوران
        </p>
        <span className="w-[50px] h-[2px] bg-Gold block mx-auto"></span>
      </div>
      <section className="px-10">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          dir={'rtl'}
          // slidesPerView={5}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            450: {
              slidesPerView: 2
            },
            650: {
              slidesPerView: 3
            },
            850: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 5
            }
          }}
          // loop
          className="mySwiper max-w-6xl mx-auto mb-10 grid grid-cols-1 Break3:grid-cols-2 justify-items-center md:!grid-cols-3  gap-4 "
        >
          {consultants.map((item, index) => (
            <SwiperSlide className="" key={index}>
              <div
                to={`/consultantsPersonal/${item.id}`}
                className="bg-slate-300 rounded-md  overflow-hidden"
              >
                <img
                  className="w-[full] Break3:max-h-[250px]"
                  src={BlankImg}
                  alt="avatar"
                />

                <div className=" flex flex-col justify-between h-40 gap-1 font-kalamehBold">
                  <div className="py-1 px-4 ">
                    <p>نام : {item.name}</p>
                    <p>شماره : {item.phone}</p>
                    {item.description ? (
                      <p className='line-clamp-2'>{item.description}</p>
                    ) : (
                      <p>توضیحاتی ثبت نشده است!</p>
                    )}
                  </div>
                  <Link
                    to={`/consultantsPersonal/${item.id}`}
                    className="bg-gray-500 text-center p-2 transition-all hover:bg-gray-600 text-slate-200"
                  >
                    مشاهده بیشتر
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          
        </Swiper>
      </section>
    </>
  );
};

export default ConsultantsSlider;
