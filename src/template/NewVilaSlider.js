import React from 'react';
import VilaSliderCard from './VilaSliderCard';
import { newVilaData } from '../services/Datas';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const NewVilaSlider = () => {
  return (
    <>
      <div className="mb-4">
        <p className="text-white mx-auto mb-2 font-bold text-xl w-fit">
          جدیدترین ویلا ها
        </p>
        <span className="w-[50px] h-[2px] bg-Gold block mx-auto"></span>
      </div>
      <section className="px-10">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          dir={"rtl"}
          slidesPerView={1}
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
            }
          }}
          // loop
          className="mySwiper max-w-6xl mx-auto mb-10 grid grid-cols-1 Break3:grid-cols-2 justify-items-center md:!grid-cols-3  gap-4 "
        >
          {newVilaData.map((item, index) => (
            <SwiperSlide key={index}>
              <VilaSliderCard data={item} />
            </SwiperSlide>
          ))}

        </Swiper>
      </section>
    </>
  );
};

export default NewVilaSlider;
