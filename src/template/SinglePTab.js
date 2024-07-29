import React, { useState } from 'react';
import { CommentsData, tab2Data, tab3Data } from '../services/Datas';

const SinglePTab = () => {
  let [tab, setTab] = useState(1);

  // change tab
  let Change = (i) => {
    setTab(i);
  };

  return (
    <section>
      <div className="mb-4 border-b border-gray-700">
        <ul
          className="flex flex-wrap  text-xs sm:text-sm  font-medium text-center"
          id="myTab"
        >
          <li className="mr-2">
            <button
              className={tab === 1 ? 'SingleP-tab tab-active' : 'SingleP-tab'}
              onClick={() => Change(1)}
              type="button"
            >
              توضیحات
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={tab === 2 ? 'SingleP-tab tab-active' : 'SingleP-tab'}
              onClick={() => Change(2)}
              type="button"
            >
              تجهیزات و امکانات
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={tab === 3 ? 'SingleP-tab tab-active' : 'SingleP-tab'}
              onClick={() => Change(3)}
              type="button"
            >
              دیگر مشخصات
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={
                tab === 4
                  ? 'SingleP-tab font-bold tab-active'
                  : 'SingleP-tab text-green-400 font-bold'
              }
              onClick={() => Change(4)}
              type="button"
            >
              نظرات
            </button>
          </li>
        </ul>
      </div>
      <div className="bg-gray-700 rounded-md p-4" id="myTabContent">
        <div
          // dangerouslySetInnerHTML={{ __html: Data.description }}
          className={tab === 1 ? 'leading-8 text-sm' : 'hidden'}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </div>

        <table
          className={
            tab === 2
              ? ' border-collapse w-full text-slate-300 font-kalamehBold text-xs md:text-sm'
              : 'hidden'
          }
        >
          <tbody>
            {tab2Data.map((i, In) => (
              <tr key={In} className="flex gap-6 w-full">
                <td className="flex-1 md:flex-auto border-b border-slate-500 bg-slate-800 rounded-sm p-2 px-4 w-1/4">
                  {i.key}
                </td>
                <td className="flex-1 md:flex-auto border-b border-slate-500 bg-slate-800 rounded-sm p-2 px-4 w-full">
                  {i.value}
                </td>
              </tr>
            ))}
            {/* {Data.possibilities_check.map((i, In) => (
                <tr key={In} className="flex gap-6 w-full">
                  <td className="flex-1 md:flex-auto border-b border-slate-500 bg-slate-800 rounded-sm p-2 px-4 w-1/4">
                    {i.key}
                  </td>
                  <td className="flex-1 md:flex-auto border-b border-slate-500 bg-slate-800 rounded-sm p-2 px-4 w-full">
                    {i.value}
                  </td>
                </tr>
              ))} */}
          </tbody>
        </table>

        <table
          className={
            tab === 3
              ? ' border-collapse w-full text-slate-300 font-kalamehBold text-xs md:text-sm'
              : 'hidden'
          }
        >
          <tbody>
            {tab3Data.map((i, In) => (
              <tr key={In} className="flex gap-6 w-full ">
                <td className="flex-1 md:flex-auto border-b border-slate-500 bg-slate-800 rounded-sm p-2 px-4 w-2/4">
                  {i.key}
                </td>
                <td className="flex-1 md:flex-auto border-b border-slate-500 bg-slate-800 rounded-sm p-2 px-4 w-full flex items-center">
                  {i.value}
                </td>
              </tr>
            ))}
            {/* {Data.specifications_check.map((i, In) => (
                <tr key={In} className="flex gap-6 w-full ">
                  <td className="flex-1 md:flex-auto border-b border-slate-500 bg-slate-800 rounded-sm p-2 px-4 w-2/4">
                    {i.key}
                  </td>
                  <td className="flex-1 md:flex-auto border-b border-slate-500 bg-slate-800 rounded-sm p-2 px-4 w-full flex items-center">
                    {i.value}
                  </td>
                </tr>
              ))} */}
          </tbody>
        </table>

        <section
          className={
            tab === 4
              ? ' border-collapse w-full text-slate-300 flex flex-col gap-3 text-xs md:text-sm p-8'
              : 'hidden'
          }
        >
          {CommentsData.length !== 0 ? (
            CommentsData.map((item, index) => (
              <div
                key={index}
                className="bg-slate-400 text-slate-800  p-4 rounded-md"
              >
                <div className="flex flex-row gap-6 mb-2 font-kalamehBold">
                  <p>{item.name}</p>
                  <p>{item.created_at}</p>
                </div>
                <p className="font-kalamehBold leading-6">{item.comment}</p>
              </div>
            ))
          ) : (
            <p className="font-bold  text-center">نظری وجود ندارد!</p>
          )}
        </section>
      </div>
    </section>
  );
};

export default SinglePTab;
