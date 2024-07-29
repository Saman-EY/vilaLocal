import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    let { id, img, title, number_room, meterage_building, meterage_house} = data;
    return (
        <Link to={`/category/${id}`} className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem] hover:scale-[1.03] transition-all duration-300 rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={img} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-kalamehBold line-clamp-1">
                {title}
              </p>
              <p className="text-xs line-clamp-1">
                {`زمین ${meterage_building} متر , بنا ${meterage_house} متر , ${number_room} اتاق`}
              </p>
            </div>
          </Link>
    );
};

export default Card;