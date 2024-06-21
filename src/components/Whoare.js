import React from "react";

function Whoare() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative z-10 lg:py-8">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Quienes somos?
                </h2>
                <p className="mt-4 text-gray-600">
                  En el devenir histórico de la educación ayacuchana la creación
                  de las instituciones educativas públicas obedece, en cierta
                  forma a las múltiples luchas y sacrificios que incansablemente
                  confrontaron los pobladores del lugar, desde los inicios de la
                  República hasta lograr, con sangre y sacrificio, la creación
                  de las entidades educativas, que hoy marcan el desarrollo
                  cultural de la región.
                </p>
                <p className="mt-4 text-gray-600">
                  En 1945, tras largos años de gestión comunal, se funda la
                  primera institución educativa, con la denominación de Escuela
                  Pública Mixta N° 61194 que luego es signado con el N° 61194 y
                  cuyo local de funcionamiento fue en la ex - casa hacienda. En
                  1970 se traslada al nuevo local, que con ingenio comunal fue
                  construido por los comuneros de entonces, en la parte norte de
                  la plaza principal. El 30 de marzo del año 1971 por Resolución
                  Ministerial N° 1002, cambia de denominación como Centro
                  Educativo N° 38009/Mx-P de Huascahura; en 1977 el Centro
                  Educativo amplía su cobertura y llega a tener II Ciclo de
                  Educación Básica Regular. En 1981 ya cuenta con el III ciclo y
                  entra en funcionamiento el nivel secundario que fue creado en
                  mérito a la RDR N° 1254 del 01 de diciembre del año 1980. En
                  1985 el Colegio “Túpac Amaru II” se separa orgánicamente del
                  nivel primario y funciona con la plena autonomía educativa.
                </p>
                <p className="mt-4 text-gray-600">
                  En 1997 de acuerdo a la R.D.R. N° 1593 de fecha 21 de
                  noviembre del año 1997, los niveles de: Inicial, Primaria y
                  Secundaria se unifican con la denominación de Institución
                  Educativa Pública “Túpac Amaru II” funcionando hasta la fecha
                  en forma fusionada los tres niveles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whoare;
