const people = [
  {
    name: "Ranulfo Arostegui Melgar",
    role: "Director General",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Giovanna Pretell Enciso",
    role: "Sub Directora Secundaria",
    imageUrl:
      "https://models.bestmodelsagency.com/recursos/clientes/F31110A5-6133-4F2E-96A8-927FA9485371/list.jpg?v1589811317?202203111855",
  },
  {
    name: "Bertha Sulma Cabrera Sulca",
    role: "Sub Directora Primaria",
    imageUrl:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9A/production/_120424467_joy2.jpg",
  },
  {
    name: "Nelly Barrientos Rodriguez",
    role: "Sub Directora Inicial",
    imageUrl:
      "https://www.liveabout.com/thmb/rBhKn_UAXevzikFrg0AlYgTgMHQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-638316888-58bd8bc93df78c353c5b8631.jpg",
  },
  // More people...
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Equipo Directivo
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Estamos orgullosos de contar con un equipo directivo comprometido
            con la excelencia educativa y el desarrollo integral de nuestros
            estudiantes.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
