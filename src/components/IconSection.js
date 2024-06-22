import React from "react";

const IconSection = () => {
  const icons = [
    {
      src: `${process.env.PUBLIC_URL}/images/trabaja.png`,
      alt: "Trabaja con Nosotros",
      text: "TRABAJA CON NOSOTROS",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/infraestructura.png`,
      alt: "Infraestructura",
      text: "INFRAESTRUCTURA",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/school.png`,
      alt: "Ex Alumnos",
      text: "EX ALUMNOS",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/ber.png`,
      alt: "BER",
      text: "B.E.R",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/trabaja.png`,
      alt: "Menú del Mes",
      text: "MENÚ DEL MES",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/libro.png`,
      alt: "Libro de Reclamaciones",
      text: "LIBRO DE RECLAMACIONES",
    },
  ];

  return (
    <section className="bg-blue-900 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 text-white text-center">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={icon.src} alt={icon.alt} className="h-12 mb-2" />
            <span className="text-lg font-semibold">{icon.text}</span>
            <button className="mt-2 p-2 bg-blue-700 rounded-full hover:bg-blue-600">
              →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconSection;
