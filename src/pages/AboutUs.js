import React from 'react';
import LoadingOverlay from '../template/LoadingOverlay';
import PageBreadcrumb from '../template/PageBreadcrumb';

const AboutUs = () => {
  return (
    <>
      <>
        <PageBreadcrumb currentPage={'درباره ی ما'} />
        <section className="min-h-[400px] flex items-center flex-col">
          <h1 className="text-white text-center mt-8 font-kalamehBold text-2xl">
            درباره ی ما
          </h1>
          <p className="text-white max-w-6xl mx-auto text-justify text-lg mt-4 bg-slate-600 px-8 py-4 rounded-md">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </section>
      </>
    </>
  );
};

export default AboutUs;

<>
  <LoadingOverlay />
  <section className="h-screen bg-Semiblack"></section>
</>;
