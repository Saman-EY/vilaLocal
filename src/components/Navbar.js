import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import SearchModal from '../template/SearchModal';
import LoadingOverlay from '../template/LoadingOverlay';
import { villaTypes, villaViews } from '../services/Datas';

// logo
import Logo from '../assets/images/LOGO ASLI 2.png';

// icons
import { ReactComponent as Hamburger } from '../assets/icons/bars-solid.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/magnifying-glass-solid.svg';
import { ReactComponent as DropDown } from '../assets/icons/angle-down-solid.svg';
import { ReactComponent as Logo2 } from '../assets/images/LOGO ASLI.svg';

const Navbar = () => {
  // state
  let [mobileNav, setmobileNav] = useState(false);
  let [SModal, setSModal] = useState(false);
  let [Loading, setLoading] = useState(false);
  // ref
  let Nav = useRef(null);
  // navigation
  let navigate = useNavigate();

  let Redirect = () => {
    navigate('/category');
  };

  return (
    <>
      <div className="bg-Blackprimary text-white sticky top-0 z-20 border-b-2 shadow-sm">
        <nav
          ref={Nav}
          className="flex xl:container mx-auto justify-between md:justify-start items-center py-0 px-6  "
        >
          <button
            onClick={() => setmobileNav(!mobileNav)}
            className="md:hidden"
          >
            <Hamburger width={'20px'} fill={'#E7C700'} />
          </button>
          <div className="FlexCenter">
            {/* logo  */}

            <Link
              to="/"
              className="w-[210px] md:w-[180px] lg:w-[260px] h-[110px] flex items-center justify-center sm:mr-28 md:mr-0"
            >
              <img className="w-full h-full" src={Logo} alt="" />
            </Link>

            <ul className="mr-6 hidden md:flex items-center gap-5 ">
              <li>
                <Link to="/" className="NavLink">
                  خانه
                </Link>
              </li>

              <li className="relative group">
                <span className="NavDropdown">
                  نوع ویلا
                  <DropDown width={'8px'} fill={'currentColor'} />
                </span>
                <ul className="NavDropdownLinks">
                  {
                    villaTypes.map((i, index) => (
                      <li
                        key={index}
                        onClick={Redirect}
                        className="text-sm  p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6 cursor-pointer"
                      >
                        {i}
                      </li>
                    ))}
                </ul>
              </li>

              <li className="relative group">
                <span className="NavDropdown ">
                  چشم انداز
                  <DropDown width={'8px'} fill={'currentColor'} />
                </span>
                <ul className="NavDropdownLinks">
                  {
                    villaViews.map((i, index) => (
                      <li
                        key={index}
                        onClick={Redirect}
                        className="text-sm  p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6 cursor-pointer"
                      >
                        {i}
                      </li>
                    ))}
                </ul>
              </li>

              <li className="mb-1">
                <Link to="/category" className="NavLink">
                  لیست ویلا ها
                </Link>
              </li>

              <li className="mb-1">
                <Link to="/consultants" className="NavLink">
                  مشاوران
                </Link>
              </li>

              <li className="mb-1">
                <Link to="/aboutUs" className="NavLink">
                  درباره ی ما
                </Link>
              </li>

              <li className="mb-1">
                <Link to="/contactUs" className="NavLink">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div className="FlexCenter gap-3 justify-end md:mr-auto md:flex-wrap-reverse">
            <button
              type="button"
              onClick={() => setSModal(true)}
              // onClick={() => navigate('/category')}
              className="FlexCenter gap-3 mr-6 bg-slate-500 p-2 rounded-md"
            >
              <p className="hidden sm:block">جست و جو کنید</p>
              <SearchIcon width={'18px'} fill={'#E7C700'} />
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE NAVBAR  */}
      <AnimatePresence>
        {mobileNav && (
          <MobileNav
            state={mobileNav}
            setState={setmobileNav}
            Type={villaTypes}
            View={villaViews}
            Redirect={Redirect}
          />
        )}
      </AnimatePresence>
      {/* SEARCHBOX MODAL  */}
      <AnimatePresence>
        {SModal && <SearchModal state={SModal} setState={setSModal} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
