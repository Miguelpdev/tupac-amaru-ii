// src/components/Directory.js
import React from "react";

const Directory = () => {
  const initialData = [
    {
      nro: 1,
      name: "Juan Perez",
      phone: "999999999",
      email: "juan.perez@example.com",
    },
    {
      nro: 2,
      name: "Maria Lopez",
      phone: "988888888",
      email: "maria.lopez@example.com",
    },
  ];

  const primaryData = [
    {
      nro: 1,
      name: "Carlos Sánchez",
      phone: "977777777",
      email: "carlos.sanchez@example.com",
    },
    {
      nro: 2,
      name: "Ana Torres",
      phone: "966666666",
      email: "ana.torres@example.com",
    },
  ];

  const secondaryData = [
    {
      nro: 1,
      name: "Luis Fernandez",
      phone: "955555555",
      email: "luis.fernandez@example.com",
    },
    {
      nro: 2,
      name: "Sofia Ramirez",
      phone: "944444444",
      email: "sofia.ramirez@example.com",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Directorio</h2>

      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-2">Nivel Inicial</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Nro</th>
              <th className="py-2 px-4 border-b border-gray-200">
                Apellidos y Nombres
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Celular</th>
              <th className="py-2 px-4 border-b border-gray-200">Correo</th>
            </tr>
          </thead>
          <tbody>
            {initialData.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.nro}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.phone}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-2">Nivel Primaria</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Nro</th>
              <th className="py-2 px-4 border-b border-gray-200">
                Apellidos y Nombres
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Celular</th>
              <th className="py-2 px-4 border-b border-gray-200">Correo</th>
            </tr>
          </thead>
          <tbody>
            {primaryData.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.nro}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.phone}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-2">Nivel Secundaria</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Nro</th>
              <th className="py-2 px-4 border-b border-gray-200">
                Apellidos y Nombres
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Celular</th>
              <th className="py-2 px-4 border-b border-gray-200">Correo</th>
            </tr>
          </thead>
          <tbody>
            {secondaryData.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.nro}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.phone}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {row.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Directory;
