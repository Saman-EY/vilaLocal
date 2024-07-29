import React from 'react';

// icons
import { ReactComponent as HomeIcon } from '../assets/icons/house-chimney-solid.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone-solid.svg';
import { ReactComponent as BuildingIcon } from '../assets/images/footerSvg.svg';
import { ReactComponent as Telegram } from '../assets/icons/telegram.svg';
import { ReactComponent as Whatsapp } from '../assets/icons/whatsapp.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <footer>
      {/* Links  */}

      <div className="mb-4 w-full max-w-[930px] mx-auto flex-col sm:flex-row FlexCenter justify-between px-4 py-10">
        <ul className=" flex flex-col md:flex-row gap-6 items-center justify-between w-full font-kalamehBold text-gray-400 text-lg px-4 ">
          <div className="flex flex-col sm:flex-row justify-center items-center flex-1 gap-5">
            <li className="FlexCenter gap-4">
              <HomeIcon width={'20px'} fill={'#FBBD4F'} />
              <p>lorem</p>
            </li>
            <li className="FlexCenter gap-4">
              <PhoneIcon width={'20px'} fill={'#FBBD4F'} />
              <p>شماره تماس: 09999999999</p>
            </li>
          </div>
          <div className="flex flex-col sm:flex-row flex-1 gap-5">
            <a
              rel="noreferrer"
              href={`https://telegram.me/lorem`}
              target="_blank"
              className="FlexCenter gap-4"
            >
              <Telegram width={'20px'} fill={'#FBBD4F'} />
              Telegram
            </a>
            <a
              rel="noreferrer"
              href={`https://wa.me/lorem`}
              target="_blank"
              className="FlexCenter gap-4"
            >
              <Whatsapp width={'20px'} fill={'#FBBD4F'} />
              Whatsapp
            </a>
            <a
              rel="noreferrer"
              href={`https://instagram.com/lorem`}
              target="_blank"
              className="FlexCenter gap-4"
            >
              <Instagram width={'20px'} fill={'#FBBD4F'} />
              Instagram
            </a>
          </div>
        </ul>
      </div>

      <BuildingIcon className="w-full m-auto h-full mt-12" />
      <div className="bg-gray-800">
        <p className="text-center text-slate-400 text-lg p-1">
          Designed by
          <a
            className="ml-2 font-kalamehBold text-blue-400"
            href={`https://instagram.com/a.g.team`}
            rel="noreferrer"
            target={'_blank'}
          >
            AGTEAM
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
