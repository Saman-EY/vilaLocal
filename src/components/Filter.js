import React, { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icons/magnifying-glass-solid.svg';
import {
  age,
  cities,
  metraj,
  states,
  villaTypes,
  villaViews
} from '../services/Datas';

const Filter = ({ setFilter, setLoading }) => {
  // states
  let [order, setOrder] = useState('');
  let [search, setSearch] = useState('');
  let [Age, setAge] = useState('');
  let [Room, setRoom] = useState('');
  let [Met, setMet] = useState('');

  return (
    <div className="shadow-md mb-10 bg-gray-800">
      <section className="flex gap-6 lg:container mx-auto px-7 py-4 flex-wrap items-center justify-center">
        <div className="FlexCenter px-2 gap-2 justify-between w-full max-w-xs bg-white rounded-md transition-all duration-400 hover:border-Gold border-2 focus-within:border-black">
          <input
            id="filter-search"
            className="text-sm py-1 flex-1 outline-none border-0 focus:border-0 focus:outline-none"
            type="text"
            placeholder="جستجو با کلمه کلیدی یا کد ملک یا آدرس یا شهر"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="FlexCenter flex-wrap justify-center gap-3">
          {/* AGE */}
          <select
            className="border text-[15px] text-gray-600 rounded-md w-[120px] p-1 cursor-pointer font-kalamehBold text-center transition-all duration-200"
            name="age"
            id="age"
            onChange={(e) => setAge(e.target.value)}
            value={Age}
          >
            <option value="" disabled>
              سن
            </option>
            {age && age.map((i, index) => <option key={index}>{i}</option>)}
          </select>

          {/* SORT */}
          <select
            className="border  text-sm text-gray-600 rounded-md w-[110px] p-1 cursor-pointer font-kalamehBold text-center  transition-all duration-200"
            defaultValue={'desc'}
            name="BasicSort"
            id="BasicSort"
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="desc">نزولی</option>
            <option value="asc">صعودی</option>
          </select>

          {/* ROOMS */}
          <select
            className="border text-sm text-gray-600 rounded-md w-[110px] p-1 cursor-pointer font-kalamehBold text-center  transition-all duration-200"
            value={Room}
            name="rooms"
            id="rooms"
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="" disabled>
              تعداد اتاق
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>

          {/* Metrage */}
          <select
            className="border text-[14px] text-gray-600 rounded-md w-[165px] px-1 py-1 cursor-pointer font-kalamehBold text-center transition-all duration-200"
            name="metrage"
            id="metrage"
            value={Met}
            onChange={(e) => setMet(e.target.value)}
          >
            <option value="" disabled>
              متراژ
            </option>
            {metraj &&
              metraj.map((i, index) => (
                <option value={i} key={index}>
                  {i}
                </option>
              ))}
          </select>
        </div>

        <div className="FlexCenter gap-2">
          <button className="border-2 text-sm font-kalamehMed text-white py-1.5 rounded-md w-[80px] hover:text-Gold hover:border-Gold transition-all duration-200">
            جستجو
          </button>
        </div>
      </section>
    </div>
  );
};

const AsideFilter = () => {
  let [citiesValue, setcitiesValue] = useState('');
  let [statesValue, setstatesValue] = useState('');
  let [TypesValue, setTypesValue] = useState('');
  let [ViewsValue, setViewsValue] = useState('');

  // funcs
  let AsideFilterFunc = () => {};

  return (
    <>
      <section>
        <div className="p-2 flex flex-col gap-2 mt-2">
          <select
            id="states"
            name="states"
            value={statesValue}
            onChange={({ target: { value } }) => setstatesValue(value)}
            className="block w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  px-1 py-1 cursor-pointer font-kalamehBold text-center transition-all duration-200"
          >
            <option value="" disabled>
              استان
            </option>
            {states &&
              states.map((i,index) => (
                <option value={i.id} key={index}>
                  {i}
                </option>
              ))}
          </select>

          <select
            id="cities"
            name="cities"
            value={citiesValue}
            onChange={({ target: { value } }) => setcitiesValue(value)}
            className="block w-full p-2 border  rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  px-1 py-1 cursor-pointer font-kalamehBold text-center transition-all duration-200"
          >
            <option value="" disabled>
              شهر
            </option>
            {cities &&
              cities.map((i,index) => (
                <option value={i.id} key={index}>
                  {i}
                </option>
              ))}
          </select>

          <select
            id="Type"
            name="Type"
            value={TypesValue}
            onChange={({ target: { value } }) => setTypesValue(value)}
            className="block w-full p-2 border  rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  px-1 py-1 cursor-pointer font-kalamehBold text-center transition-all duration-200"
          >
            <option value="" disabled>
              نوع ویلا
            </option>
            {villaTypes &&
              villaTypes.map((i, index) => (
                <option value={i} key={index}>
                  {i}
                </option>
              ))}
          </select>
          <select
            id="View"
            name="View"
            value={ViewsValue}
            onChange={({ target: { value } }) => setViewsValue(value)}
            className="block w-full p-2 border  rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white  px-1 py-1 cursor-pointer font-kalamehBold text-center transition-all duration-200"
          >
            <option value="" disabled>
              چشم انداز
            </option>
            {villaViews &&
              villaViews.map((i, index) => (
                <option value={i} key={index}>
                  {i}
                </option>
              ))}
          </select>

          <button
            onClick={AsideFilterFunc}
            className="bg-Gold text-slate-700 rounded-md p-2 font-kalamehBold hover:bg-gray-400 transition-all hover:text-white"
          >
            اعمال تغییرات
          </button>
        </div>
      </section>
    </>
  );
};

export { Filter, AsideFilter };
