import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <section className="relative bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/%C3%81rboles_en_la_Plaza_de_Armas_de_Huascahura._Ayacucho%2C_Per%C3%BA.jpg/1280px-%C3%81rboles_en_la_Plaza_de_Armas_de_Huascahura._Ayacucho%2C_Per%C3%BA.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Institucion Educativa
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Tupac Amaru II.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Disciplina, Estudio y Trabajo: Los Pilares de Nuestra Educación
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
