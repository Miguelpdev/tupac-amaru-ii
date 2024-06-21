import React from "react";

function HeaderLevels() {
  return (
    <div className="bg-no-repeat bg-center relative">
      <img
        src="https://flemingtacna.edu.pe/wp-content/uploads/2021/10/NIVELES.jpg"
        alt="banner levels"
      />
      <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
        <h2 className="text-white text-4xl font-bold pl-20">
          NIVELES ACADEMICOS
        </h2>
      </div>
    </div>
  );
}

export default HeaderLevels;
