import React from "react";
import EventCard from "./EventCard";

const Calendar = () => {
  const events = [
    {
      date: "06",
      month: "MAR",
      title: "CEREMONIA DE INAGURACIÓN",
      imageSrc:
        "https://lasalleguayaquil.edu.ec/wp-content/uploads/2023/05/1-990x500.jpeg",
    },
    {
      date: "05",
      month: "MAR",
      title: "INICIO DE CLASES",
      imageSrc:
        "https://www.canal10.com.ni/wp-content/uploads/2021/11/Estudiantes.jpg",
    },
    {
      date: "04",
      month: "MAR",
      title: "INICIO DE CLASES",
      imageSrc:
        "https://elcomercio.pe/resizer/3Mt4UxOwiEt_sPS3UMHRwOeMADQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BH4YQEHIIJCDJJPM5KD7AOS5XI.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-2">CALENDARIO</h2>
        <p className="text-gray-700 mb-6">
          Explore los eventos que se avecinan este año.
        </p>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mb-10">
          VER MÁS →
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              month={event.month}
              title={event.title}
              imageSrc={event.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
