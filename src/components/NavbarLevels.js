import React from "react";

function NavbarLevels() {
  return (
    <div className="basis-1/4 space-y-2">
      <ul className="p-2 bg-amber-100 hover:bg-amber-600 rounded w-1/2">
        Nivel Inicial
      </ul>
      <ul className="p-2 bg-amber-100 hover:bg-amber-600 rounded-sm w-1/2">
        NIvel Primaria
      </ul>
      <ul className="p-2 bg-amber-100 hover:bg-amber-600 rounded w-1/2">
        Nivel Secundaria
      </ul>
    </div>
  );
}

export default NavbarLevels;
