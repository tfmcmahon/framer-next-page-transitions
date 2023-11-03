"use client";

import Product from "@/components/Product";
import Icons from "@/components/icons";
import { PRODUCTS_DB } from "@/constants/product-db";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import screen2 from "~/public/images/screen2-dt.webp";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const content = {
  //   animate: {
  //     transition: { staggerChildren: 2 },
  //   },
};

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const title = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const products = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const fadeUp = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const grid = {
  visible: {
    y: -320,
    background:
      "linear-gradient(0deg, hsl(48 95.8% 53.1%) 0%, hsl(48 95.8% 53.1%) 100%)",
    transition: {
      duration: 0.7,
      ease: [0.6, -0.0, 0.01, 0.99],
      delayChildren: 0.4,
    },
  },
  hidden: {
    y: 0,
    background:
      "linear-gradient(180deg, hsl(48 95.8% 53.1%) 0%, hsl(45 95.8% 53.1%) 100%)",
  },
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-[500px] bg-white"
      key="456"
    >
      <Link href={"/"}>Home</Link>
    </motion.div>
    // <>
    //   <motion.section
    //     key="templates"
    //     className="relative h-[418px]"
    //     variants={content}
    //     animate="animate"
    //   >
    //     <motion.div
    //       className="absolute border-b-2 pt-8 border-tertiary h-[418px] w-screen b-0 l-0"
    //       variants={grid}
    //       initial="hidden"
    //       animate="visible"
    //       exit="hidden"
    //     >
    //       <motion.div
    //         variants={title}
    //         className="container flex flex-col justify-end h-full pb-8"
    //       >
    //         <h3 className="scroll-m-20 text-md font-medium tracking-tight lg:text-lg md:pt-12">
    //           You wanted help with: Selling more stuff
    //         </h3>
    //         <Link
    //           href="/"
    //           className="flex gap-2 items-center text-link font-semibold text-xs md:text-sm hover:cursor-pointer"
    //         >
    //           <Icons
    //             name="ChevronLeft"
    //             className="h-4 w-4"
    //           />
    //           Go back
    //         </Link>
    //       </motion.div>
    //     </motion.div>
    //     <motion.div className="flex h-full pt-4 md:grid flex-col md:grid-rows-1 md:grid-cols-9 gap-8 container relative">
    //       <motion.div
    //         variants={fade}
    //         className="md:col-start-1 md:col-end-5 w-full h-full flex flex-col gap-4 justify-center"
    //         initial="hidden"
    //         animate="visible"
    //         exit="hidden"
    //       >
    //         <h1 className="scroll-m-20 text-xl font-medium tracking-tight lg:text-2xl md:pt-12">
    //           We recommend the landing page template: Victoria
    //         </h1>
    //         <p className="text-xs md:text-sm">
    //           Victoria is a clean landing page template ideal for regular
    //           promotions and featured products
    //         </p>
    //         <div className="flex gap-2">
    //           <Link href="/">
    //             <p
    //               className={cn(
    //                 navigationMenuTriggerStyle(),
    //                 "bg-link text-white hover:cusor-pointer hover:bg-link/80 hover:text-white"
    //               )}
    //             >
    //               Select template
    //             </p>
    //           </Link>
    //           <Link href="/">
    //             <p
    //               className={cn(
    //                 navigationMenuTriggerStyle(),
    //                 "border-2 border-black bg-transparent hover:cusor-pointer hover:bg-slate-200"
    //               )}
    //             >
    //               View template
    //             </p>
    //           </Link>
    //         </div>
    //       </motion.div>
    //       <motion.div
    //         className="md:col-start-5 md:col-end-10 border-2 border-black border-b-0 rounded-t-md fade"
    //         variants={fadeUp}
    //         initial="hidden"
    //         animate="visible"
    //         exit="hidden"
    //       >
    //         <Image
    //           src={screen2}
    //           alt="Picture of the author"
    //           className="object-cover object-center w-full h-full"
    //         />
    //       </motion.div>
    //     </motion.div>
    //   </motion.section>

    //   <motion.section
    //     key="temp-products"
    //     className="text-gray-700 body-font py-12 bg-white border-t-2 border-slate-300"
    //   >
    //     <motion.div
    //       className="container"
    //       variants={container}
    //       initial="hidden"
    //       animate="visible"
    //     >
    //       <motion.h2
    //         className="scroll-m-20 text-2xl font-medium tracking-tight lg:text-3xl py-8 title"
    //         variants={title}
    //       >
    //         Today&apos;s most popular templates
    //       </motion.h2>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-8">
    //         {PRODUCTS_DB.toReversed().map((product, index) => (
    //           <motion.div
    //             variants={products}
    //             key={index}
    //             className="products"
    //           >
    //             <Product {...product} />
    //           </motion.div>
    //         ))}
    //       </div>
    //     </motion.div>
    //   </motion.section>
    // </>
  );
}
