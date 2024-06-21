// src/components/LevelSecondary.js
import React from "react";
import HeaderLevels from "./HeaderLevels";
import NavbarLevels from "./NavbarLevels";

const LevelSecondary = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <HeaderLevels />
      <div className="flex flex-row pt-3">
        <NavbarLevels />
        <div className="basis-3/4">
          <h2 className="text-2xl font-bold mb-4">Nivel Secundaria</h2>
          <p>
            En el nivel Secundaria nuestros estudiantes profundizan y afianzan
            las competencias que se han venido desarrollando desde los niveles
            de inicial y primaria, demuestran autocontrol en la expresión de sus
            emociones y la capacidad para ponerse en la situación del otro.
            Reconocer sus limitaciones, posibilidades y oportunidades al
            enfrentar situaciones problematizadoras a través de proyectos de
            aprendizaje.
          </p>
          <br />
          <p>
            A nivel cognitivo, seleccionan de manera autónoma estrategias de
            aprendizaje para aprender a aprender, resolver tareas y problemas.
            Son conscientes de la realidad del país y que se requiere el aporte
            ciudadano para solucionar los problemas que nos afectan como
            sociedad, por lo que aprenden a acoger las emociones y opiniones de
            los demás, buscando la participación, la integración, el acuerdo y
            la cooperación de los miembros de su comunidad.
          </p>
          <br />
          <p>
            Nuestros estudiantes son creativos, críticos y solidarios, Se
            comprometen con el proyecto de Dios en sus vidas, teniendo a
            Jesucristo como modelo y estando al servicio de los demás. (Opción
            por los pobres) asumiendo una actitud global y buscando una
            convivencia pacífica.
          </p>
          <br />
          <div className="underline">Trabajo por proyectos</div>
          <div className="underline">Idiomas</div>
          <div className="underline">Biblioteca</div>
          <div className="underline">Viaje de estudios</div>
          <div className="underline">Tecnologia</div>
          <div className="underline">Deportes</div>
          <div className="underline">Natacion</div>
          <div className="underline">Talleres artisticos</div>
        </div>
      </div>
    </div>
  );
};

export default LevelSecondary;
