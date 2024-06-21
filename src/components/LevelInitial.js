// src/components/LevelInitial.js
import React from "react";
import HeaderLevels from "./HeaderLevels";
import NavbarLevels from "./NavbarLevels";

const LevelInitial = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md ">
      <HeaderLevels />
      <div className="flex flex-row pt-3">
        <NavbarLevels />
        <div className="basis-3/4">
          <h2 className="text-2xl font-bold mb-4">Nivel Inicial</h2>
          <p className="text-justify">
            Los estudiantes del nivel inicial aprenden en un ambiente donde
            interactúan y se relacionan con el otro de manera respetuosa. Se les
            plantean diversas experiencias de aprendizaje que les permite
            descubrir el mundo de manera activa, lúdica, exploratoria y
            experiencial, desarrollando habilidades y capacidades para
            desenvolverse con autonomía en la vida diaria pensando siempre en su
            prójimo.
          </p>
          <br />
          <div className="underline">Trabajo por proyectos</div>
          <div className="underline">Aprendizaje a traves del juego</div>
          <div className="underline">Biblioteca</div>
        </div>
      </div>
    </div>
  );
};

export default LevelInitial;
