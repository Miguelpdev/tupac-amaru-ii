import React from "react";
import { Link } from "react-router-dom";

const IconSection = () => {
  const icons = [
    {
      src: `${process.env.PUBLIC_URL}/images/infraestructura.png`,
      alt: "Infraestructura",
      text: "INFRAESTRUCTURA",
      link: "/campus",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/school.png`,
      alt: "Directorio",
      text: "Directorio",
      link: "/directory",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/ber.png`,
      alt: "gallery",
      text: "Galeria",
      link: "/gallery",
    },
  ];

  return (
    <section className="bg-blue-900 py-10 flex justify-center items-center">
      <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={icon.src} alt={icon.alt} className="h-12 mb-2" />
            <span className="text-lg font-semibold">{icon.text}</span>
            <Link
              to={icon.link}
              className="mt-2 p-2 bg-blue-700 rounded-full hover:bg-blue-600"
            >
              →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconSection;
