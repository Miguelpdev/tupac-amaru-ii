const products = [
  {
    id: 1,
    name: "Festival de Villancicos de nuestros estudiantes.",
    href: "#",
    price: "21 diciembre 2023",
    imageSrc:
      "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/411971373_751582533658111_705002184470888864_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zBHSQk2GhaYQ7kNvgHSNhd-&_nc_ht=scontent-lim1-1.xx&oh=00_AYDY05pf55TSNNAUhJLcary-VGXT6ZV4xgp_3uoV4_wTBQ&oe=667BF6F2",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Promoción 2023 haciendo su ultimo pase por el estrado.",
    href: "#",
    price: "11 diciembre 2023",
    imageSrc:
      "https://scontent.flim16-1.fna.fbcdn.net/v/t39.30808-6/406871689_744955544320810_1409070117332427866_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fWjeSDSuFlQQ7kNvgGE7h9q&_nc_ht=scontent.flim16-1.fna&oh=00_AYDol778gHWgcGOkobik4ylWnyWJYTYZj1WgFdJasV6PMA&oe=667BF7B8",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Actividades celebratorias de nuestra Institución, mayordomos 2023.",
    href: "#",
    price: "06 noviembre 2023",
    imageSrc:
      "https://scontent.flim16-1.fna.fbcdn.net/v/t39.30808-6/399999236_724735609676137_5220201013309393911_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RoJiWi3XYLMQ7kNvgFCF8a9&_nc_ht=scontent.flim16-1.fna&oh=00_AYAIV_iwjWbR-aEp0Tr3OsSqj7KWlUhdAbl5Ry1fe0fRjg&oe=667BDBE5",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Inauguración del campeonato deportivo  de padres de familia.",
    href: "#",
    price: "07 octubre 2023",
    imageSrc:
      "https://scontent.flim16-3.fna.fbcdn.net/v/t39.30808-6/387785232_708155658000799_6978823891686210327_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=S2NNIH1CrR0Q7kNvgG2Id8p&_nc_ht=scontent.flim16-3.fna&oh=00_AYCgh1R0kBQxVPZ4JqLxVBENedgTHIyERB03aQ_ZkCF47g&oe=667BE5BB",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Gallery() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Imagenes</h2>

        <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Imagenes
          </h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Recopilacion de imagenes de procesos realizados en el I.E Tupac
            Amaru II.
          </p>
          <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a
              href="#"
              class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                class="me-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xs">Imagenes de</div>
                <div class="-mt-1 font-sans text-sm font-semibold">2024</div>
              </div>
            </a>
            <a
              href="#"
              class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                class="me-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xs">Imagenes de</div>
                <div class="-mt-1 font-sans text-sm font-semibold">2023</div>
              </div>
            </a>
          </div>
        </div>
        <br />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-xs font-medium text-gray-400">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
