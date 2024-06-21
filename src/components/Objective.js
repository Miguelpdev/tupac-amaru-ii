import React from "react";
import { Link } from "react-router-dom";

function Objective() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-12">
                <h2 className="text-2xl font-bold sm:text-3xl">Objetivo</h2>

                <p className="mt-4 text-gray-600">
                  Mejorar el nivel de desarrollo de competencias de los
                  estudiantes de la IE Túpac Amaru II mediante la implementación
                  de las competencias previstas en el CNEB, a fin de lograr el
                  perfil de egreso atendiendo las demandas del entorno,
                  necesidades e intereses de aprendizaje según el grado y ciclo.
                </p>

                <Link
                  href="#"
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative z-10 lg:py-8">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Objective;
