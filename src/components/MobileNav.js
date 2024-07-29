import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// icons
import { ReactComponent as Close } from '../assets/icons/circle-xmark-solid.svg';
import { ReactComponent as Arrow } from '../assets/icons/angle-down-solid.svg';

const MobileNav = ({ setState, Type, View, Redirect }) => {
  let overlay = useRef(null);

  let CloseNav = (e) => {
    if (e.target.id === 'nav-overlay') {
      setState(false);
    }
  };

  let NavDopdown = (e) => {
    if (e.target.id === 'MobileNav') {
      let target = e.target.nextSibling;
      target.classList.toggle('hidden');
    }
    if (e.target.parentNode.id === 'MobileNav') {
      let target = e.target.parentNode.nextSibling;
      target.classList.toggle('hidden');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
      id="nav-overlay"
      onClick={CloseNav}
      ref={overlay}
      className="fixed inset-0 bg-black bg-opacity-50 z-30"
    >
      <motion.section
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.4 }}
        className="w-64 inset-0 bg-Blackprimary text-white h-full overflow-y-auto pb-10"
      >
        <div className="pt-7 flex justify-end px-4 ">
          <button
            onClick={() => {
              setState(false);
            }}
            className="text-red-500"
          >
            <Close width={'18px'} fill={'currentColor'} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-4 mt-4 divide-y">
          <li className="font-kalamehBold pt-2">
            <Link to={'/'}>خانه</Link>
          </li>

          <li className="font-kalamehBold pt-3">
            <button
              onClick={NavDopdown}
              id="MobileNav"
              className="FlexCenter gap-1"
            >
              نوع ویلا
              <Arrow width={'10px'} fill={'currentColor'} />
            </button>
            <ul className="text-slate-500 text-sm border-r border-primary mt-4 pr-2 flex hidden flex-col gap-3 cursor-pointer">
              {Type &&
                Type.map((item,index) => (
                  <li
                    key={index}
                    onClick={Redirect}
                    className="text-blue-200"
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </li>

          <li className="font-kalamehBold pt-3">
            <button
              onClick={NavDopdown}
              id="MobileNav"
              className="FlexCenter gap-1"
            >
              چشم انداز
              <Arrow width={'10px'} fill={'currentColor'} />
            </button>
            <ul className="text-slate-500 text-sm border-r border-primary mt-4 pr-2 flex hidden flex-col gap-3 cursor-pointer">
              {View &&
                View.map((item,index) => (
                  <li
                    key={index}
                    onClick={Redirect}
                    className="text-blue-200"
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </li>

          <li className="font-kalamehBold pt-3 ">
            <Link to={'/category'}>لیست ویلا ها</Link>
          </li>

          <li className="font-kalamehBold pt-3 ">
            <Link to={'/consultants'}>مشاوران</Link>
          </li>
          <li className="font-kalamehBold pt-3 ">
            <Link to={'/aboutUs'}>درباره ی ما</Link>
          </li>
          <li className="font-kalamehBold pt-3 ">
            <Link to={'/contactUs'}>تماس با ما</Link>
          </li>
        </ul>
      </motion.section>
    </motion.div>
  );
};

export default MobileNav;
