import React from 'react';
import CategoryLinks from '../template/CategoryLinks';

// icon
import { ReactComponent as Left } from '../assets/icons/angle-left-solid.svg';
import { ReactComponent as Right } from '../assets/icons/angle-right-solid.svg';
// images
import Card from '../template/Card';
import { allVilas, villaTypes } from '../services/Datas';

const CardContainer = () => {
  return (
    <>
      <section className="flex-1 px-4">
        <CategoryLinks data={villaTypes.slice(1, 4)} />
        <section
          className={
            allVilas.length !== 0
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
              : 'w-full'
          }
        >
          {allVilas.length === 0 ? (
            <p className="text-white w-full font-bold text-center my-8 mx-auto ">
              چیزی یافت نشد
            </p>
          ) : (
            allVilas.map((item, index) => <Card key={index} data={item} />)
          )}
        </section>

        {/* pagination */}
        <ul className="flex justify-center mt-10 items-center w-fit rounded-md overflow-hidden  mx-auto">
          <button
            className={
              'bg-slate-400 hover:bg-slate-200 p-[13.5px] block opacity-40 pointer-events-none'
            }
          >
            <Right width={'7px'} />
          </button>

          <button className="Pagination bg-Gold text-white hover:text-white hover:bg-yellow-500">
            1
          </button>
          <button className="Pagination">2</button>
          <button className="Pagination">3</button>
          <button className="Pagination">4</button>

          <button
            className={'bg-slate-400 hover:bg-slate-200 p-[13.5px] block'}
          >
            <Left width={'7px'} />
          </button>
        </ul>
      </section>
    </>
  );
};

export default CardContainer;
