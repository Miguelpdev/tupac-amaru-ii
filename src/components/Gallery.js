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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

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
