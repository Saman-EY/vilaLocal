import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import { ReactComponent as SearchIcon } from '../assets/icons/magnifying-glass-solid.svg';
import HeaderImage from '../assets/images/headerImage.jpg';

const LandingSec1 = ({ data }) => {
  let [search, setSearch] = useState('');
  let navigate = useNavigate();

  let Redirect = () => {
    navigate('/category');
  };

  return (
    <>
      <section className="LandingSearchSec">
        <img src={HeaderImage} className="w-full h-full max-h-[550px]" alt="" />

        <div className=" w-full px-4">
          <div className="bg-white FlexCenter my-4 mx-auto w-full max-w-[900px] rounded-md group z-10">
            <input
              className=" w-full h-10 outline-none border-0 ring-Gold transition-all duration-200 focus:ring-2  pr-2 rounded-r-md placeholder:text-sm placeholder:font-kalamehBold"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو بر اساس کلمه کلیدی یا کد ملک یا آدرس یا شهر یا نام شهر"
            />
            <button
              onClick={Redirect}
              className="bg-slate-500 h-10 w-10 transition-all duration-200 group-focus-within:ring-2 text-Gold hover:text-white hover:bg-slate-400 ring-Gold  FlexCenter justify-center rounded-l-md "
            >
              <SearchIcon width={'15px'} fill={'currentColor'} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingSec1;
