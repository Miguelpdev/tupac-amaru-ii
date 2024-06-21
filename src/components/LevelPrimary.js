// src/components/LevelPrimary.js
import React from "react";
import HeaderLevels from "./HeaderLevels";
import NavbarLevels from "./NavbarLevels";

const LevelPrimary = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <HeaderLevels />
      <div className="flex flex-row pt-3">
        <NavbarLevels />
        <div className="basis-3/4">
          <h2 className="text-2xl font-bold mb-4">Nivel Primaria</h2>
          <p>
            En el nivel Primaria buscamos que nuestros estudiantes sean los
            actores de su propio aprendizaje. Por ello, se plantean experiencias
            de aprendizaje que les permite desarrollar sus capacidades como el
            pensamiento crítico - creativo, la cooperación, la comunicación y el
            autoconocimiento, brindándoles oportunidades concretas para el
            desarrollo de su aspecto cognitivo, físico, psicológico y
            espiritual.
          </p>
          <br />
          <p>
            Se fomenta la espontaneidad, el respeto al otro y la identidad con
            el colegio estableciendo vínculos cercanos con sus maestros que los
            lleva a participar en un entorno seguro y libre, respetando sus
            ritmos de aprendizaje y su desarrollo socioemocional en las
            diferentes etapas del nivel.
          </p>
          <br />
          <div className="underline">Trabajo por proyectos</div>
          <div className="underline">Aprendizaje a traves del juego</div>
          <div className="underline">Biblioteca</div>
          <div className="underline">Viaje de estudios</div>
          <div className="underline">Tecnologia</div>
          <div className="underline">Natacion</div>
        </div>
      </div>
    </div>
  );
};

export default LevelPrimary;
