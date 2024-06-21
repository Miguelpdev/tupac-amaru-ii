// src/components/Home.js
import React from "react";
import IconSection from "./IconSection";
import Calendar from "./Calendar";
import Team from "./Team";
import Banner from "./Banner";
import Whoare from "./Whoare";
import Welcome from "./Welcome";
import Objective from "./Objective";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <div className="p-6 bg-white rounded-lg shadow-md mt-6">
        <h2 className="text-3xl font-bold mb-4">
          Bienvenidos a Nuestra Institución Educativa
        </h2>
        <p className="mb-4">
          Aquí podrás encontrar información sobre los diferentes niveles
          educativos que ofrecemos y nuestro directorio.
        </p>
        <p className="mb-4">
          Nuestra misión es brindar una educación de calidad para formar
          ciudadanos competentes y responsables.
        </p>
        <p>Explora nuestras secciones para obtener más información.</p>
      </div> */}
      <Welcome />
      <IconSection />
      <Calendar />
      <Whoare />
      {/* <div className="p-6 bg-white rounded-lg shadow-md mt-6">
        <h2 className="text-3xl font-bold mb-4">OBJETIVO</h2>
        <p className="mb-4">
          Mejorar el nivel de desarrollo de competencias de los estudiantes de
          la IE Túpac Amaru II mediante la implementación de las competencias
          previstas en el CNEB, a fin de lograr el perfil de egreso atendiendo
          las demandas del entorno, necesidades e intereses de aprendizaje según
          el grado y ciclo.
        </p>
      </div> */}
      <Objective />
      <Team />
    </div>
  );
};

export default Home;
