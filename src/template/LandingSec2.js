import React from 'react';
import { landingSlider } from '../services/Datas';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const LandingSec2 = () => {
  return (
    <section className="mt-10 mb-16">
      <div className="flex flex-col items-center gap-3 mb-8">
        <h3 className="font-kalamehBold text-gray-200 text-xl">
          پیشنهاد های سرمایه گذاری
        </h3>
        <span className="w-[50px] h-[2px] bg-Gold"></span>
      </div>
      <section className="px-5">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          // loop
          className="max-w-5xl"
        >
          {landingSlider.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative pt-[70%] md:pt-[54%] lg:pt-[38%] rounded-md overflow-hidden">
                <img
                  className="w-full h-full absolute inset-0"
                  src={item.image}
                  alt="slider"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default LandingSec2;
