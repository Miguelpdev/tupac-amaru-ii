// src/components/Home.js
import React from "react";
import IconSection from "./IconSection";
import Calendar from "./Calendar";
import Team from "./Team";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      {/* <div className="relative bg-blue-600 h-64 flex items-center justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/images/background.png`}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold">I.E. TÚPAC AMARU II</h1>
          <p className="mt-2 text-2xl">DISCIPLINA - ESTUDIO - TRABAJO</p>
        </div>
      </div> */}
      <Banner />
      <div className="p-6 bg-white rounded-lg shadow-md mt-6">
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
      </div>
      <IconSection />
      <Calendar />

      <div className="p-6 bg-white rounded-lg shadow-md mt-6">
        <h2 className="text-3xl font-bold mb-4">¿QUIÉNES SOMOS?</h2>
        <p className="mb-4">
          En el devenir histórico de la educación ayacuchana la creación de las
          instituciones educativas públicas obedece, en cierta forma a las
          múltiples luchas y sacrificios que incansablemente confrontaron los
          pobladores del lugar, desde los inicios de la República hasta lograr,
          con sangre y sacrificio, la creación de las entidades educativas, que
          hoy marcan el desarrollo cultural de la región.
        </p>
        <p className="mb-4">
          En 1945, tras largos años de gestión comunal, se funda la primera
          institución educativa, con la denominación de Escuela Pública Mixta N°
          61194 que luego es signado con el N° 61194 y cuyo local de
          funcionamiento fue en la ex - casa hacienda. En 1970 se traslada al
          nuevo local, que con ingenio comunal fue construido por los comuneros
          de entonces, en la parte norte de la plaza principal. El 30 de marzo
          del año 1971 por Resolución Ministerial N° 1002, cambia de
          denominación como Centro Educativo N° 38009/Mx-P de Huascahura; en
          1977 el Centro Educativo amplía su cobertura y llega a tener II Ciclo
          de Educación Básica Regular. En 1981 ya cuenta con el III ciclo y
          entra en funcionamiento el nivel secundario que fue creado en mérito a
          la RDR N° 1254 del 01 de diciembre del año 1980. En 1985 el Colegio
          “Túpac Amaru II” se separa orgánicamente del nivel primario y funciona
          con la plena autonomía educativa.
        </p>
        <p className="mb-4">
          En 1997 de acuerdo a la R.D.R. N° 1593 de fecha 21 de noviembre del
          año 1997, los niveles de: Inicial, Primaria y Secundaria se unifican
          con la denominación de Institución Educativa Pública “Túpac Amaru II”
          funcionando hasta la fecha en forma fusionada los tres niveles.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md mt-6">
        <h2 className="text-3xl font-bold mb-4">OBJETIVO</h2>
        <p className="mb-4">
          Mejorar el nivel de desarrollo de competencias de los estudiantes de
          la IE Túpac Amaru II mediante la implementación de las competencias
          previstas en el CNEB, a fin de lograr el perfil de egreso atendiendo
          las demandas del entorno, necesidades e intereses de aprendizaje según
          el grado y ciclo.
        </p>
      </div>
      <Team />
    </div>
  );
};

export default Home;
