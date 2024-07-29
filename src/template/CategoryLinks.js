import React from 'react';

const CategoryLinks = ({ data }) => {

  return (
    <div className="flex gap-8 my-4 justify-center">
      {data.map((i,index) => (
        <button
          key={index}
          className="border flex-1 text-slate-200 text-center border-Gold rounded-md shadow-Gold shadow-md p-2"
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default CategoryLinks;
