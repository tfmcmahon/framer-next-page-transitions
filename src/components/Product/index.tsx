import Image from "next/image";

interface ProductProps {
  img: string;
  category: string;
  name: string;
  price: number;
}

const Product = ({ img, category, name, price }: ProductProps) => (
  <div className="w-full p-4 lg:w-1/4 md:w-1/2">
    <a className="relative block h-48 overflow-hidden rounded">
      <Image
        alt="ecommerce"
        className="block object-cover object-center w-full h-full"
        src={img}
        width={420}
        height={260}
      />
    </a>
    <div className="mt-4">
      <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
        {category}
      </h3>
      <h2 className="text-lg font-medium text-gray-100 title-font">{name} </h2>
      <p className="mt-1 text-gray-400">${price.toFixed(2)}</p>
    </div>
  </div>
);

export default Product;
