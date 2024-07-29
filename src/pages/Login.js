import React from 'react';
import IMG from '../assets/images/AQ.jpg';

const Login = () => {
  return (
    <>
    <section className='bg-gray-600 h-screen flex justify-center items-center'>

      <section className="flex flex-col justify-center items-center md:items-stretch w-full  md:flex-row h-[500px]  max-w-[1000px] mx-auto p-4">
        <img src={IMG} className={'w-full max-w-xl md:max-w-[50%] rounded-tr-3xl'} alt="form" />
        <div className="w-full max-w-xl md:max-w-[50%]  rounded-bl-3xl p-[16.9px] pr-0">
          <section className="h-full w-full bg-white md:border-2 md:border-r-0 border-slate-400 rounded-bl-3xl flex justify-center items-center">
            <form className="flex flex-col gap-2  w-full">
              <div className="w-full max-w-[250px] mx-auto">
                <input
                  className="w-full border-2 border-stone-400 outline-none rounded-r-full rounded-tl-full px-4 py-1 placeholder:font-kalamehBold placeholder:text-base text-lg"
                  placeholder="شماره ای که جهت نام کاربری وارد کرده اید"
                  type="text"
                />
              </div>
              <div className="w-full max-w-[250px] mx-auto">
                <input
                  className="w-full border-2 border-stone-400 outline-none rounded-r-full rounded-tl-full px-4 py-1 placeholder:font-kalamehBold placeholder:pb-1.5 font-mono"
                  placeholder="کلمه عبور"
                  type="password"
                />
              </div>
              <button className="bg-[#3E3E3E] transition-all text-white rounded-full w-[100px] p-1.5 pb-2 mx-auto hover:bg-gray-500">
                ورود
              </button>
            </form>
          </section>
        </div>
      </section>
    </section>
    </>
  );
};

export default Login;
