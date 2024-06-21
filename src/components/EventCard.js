import React from "react";

const EventCard = ({ date, month, title, imageSrc }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-blue-900 text-white px-4 py-2 rounded-lg">
          <span className="block text-lg font-bold">{date}</span>
          <span className="block text-sm">{month}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <img src={imageSrc} alt={title} className="w-full mb-4 rounded-lg" />
      <button className="text-blue-900 font-bold">LEER MÁS</button>
    </div>
  );
};

export default EventCard;
