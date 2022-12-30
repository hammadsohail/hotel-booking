import React from "react";
import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          alt="largeCard"
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-40 space-y-3 left-12">
        <h2 className="text-4xl mb-3 w-64 ">{title}</h2>
        <p>{description}</p>
        <button
          className="bg-gray-900 rounded-lg px-4 py-2 text-white font-semibold text-sm"
          type="button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
