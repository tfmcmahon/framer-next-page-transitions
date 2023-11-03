import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ProductProps {
  img: StaticImageData;
  category: string;
  name: string;
  price: number;
}

const Product = ({ img, category, name, price }: ProductProps) => (
  <motion.div
    className="shadow-sm rounded overflow-hidden border"
    whileHover={{ scale: 1.08, y: -10 }}
  >
    <a className="relative block h-48 ">
      <Image
        alt="ecommerce"
        className="block object-cover object-center w-full h-full"
        src={img}
        width={420}
        height={260}
      />
    </a>
    <div className="p-4 bg-slate-100 border-t">
      <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
        {category}
      </h3>
      <h2 className="text-lg font-medium text-gray-800 title-font">{name} </h2>
      <p className="mt-1 text-gray-400">${price.toFixed(2)}</p>
    </div>
  </motion.div>
);

export default Product;
