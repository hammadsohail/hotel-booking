import React from 'react';
import Image from "next/image";
//props coming from staticProp index.js, AND ITS COMING FROM SMALLCARD COMPONENT USED IN INDEX.JS AS WE map the prope->explore data we are notusing Props, we instead destructure it and use its data to represent like proprs->img,location,distance

const SmallCard = ({img, location, distance}) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image  src={img} layout="fill" className="rounded-lg"/>
      </div>

      <div>
        <h2 className="">{location}</h2>
        <h3 className="text-gray-600">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard