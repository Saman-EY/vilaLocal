import React from 'react';
import VilaSliderCard from './VilaSliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { bigVilaData } from '../services/Datas';

const BigVilaSilder = () => {
  return (
    <>
      <div className="mb-4">
        <p className="text-white mx-auto mb-2 font-bold text-xl w-fit">
          بزرگ ترین ویلا ها
        </p>
        <span className="w-[50px] h-[2px] bg-Gold block mx-auto"></span>
      </div>
      <section className="px-10">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
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
          className="mySwiper max-w-6xl mx-auto mb-10 gap-4 "
        >
          {bigVilaData.map((item, index) => (
            <SwiperSlide key={index}>
              <VilaSliderCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default BigVilaSilder;
