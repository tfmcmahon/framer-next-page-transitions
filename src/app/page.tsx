"use client";

import Product from "@/components/Product";
import Icons from "@/components/icons";
import { PRODUCTS_DB } from "@/constants/product-db";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import screen1 from "~/public/images/screen1-dt.webp";

const content = (isFirstMount: boolean) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

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
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const grid = {
  hidden: {
    y: -300,
    background:
      "linear-gradient(0deg, hsl(48 95.8% 53.1%) 0%, hsl(48 95.8% 53.1%) 100%)",
  },
  visible: {
    y: 0,
    background:
      "linear-gradient(180deg, hsl(48 95.8% 53.1%) 0%, hsl(45 95.8% 53.1%) 100%)",
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
      delayChildren: 0.7,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-[500px] bg-primary"
      key="123"
    >
      <Link href={"/templates"}>Templates</Link>
    </motion.div>
    // <>
    //   <motion.section
    //     // initial={{ opacity: 1 }}
    //     // animate={{ opacity: 1 }}
    //     // exit={{ opacity: 0 }}
    //     key="index"
    //     className="relative border-b-2 pt-4 border-tertiary"
    //     variants={grid}
    //     initial="hidden"
    //     animate="visible"
    //     exit="hidden"
    //   >
    //     <div className="container">
    //       <motion.div className="flex md:grid flex-col md:grid-rows-1 md:grid-cols-9 gap-8 container px-0 relative">
    //         <motion.div
    //           variants={fade}
    //           className="md:col-start-1 md:col-end-5 self-center justify-self-center w-full h-full overflow-hidden"
    //         >
    //           <h1 className="scroll-m-20 text-3xl font-medium tracking-tight lg:text-5xl md:pt-12">
    //             Find a template based on your goal
    //           </h1>
    //           <p className="[&:not(:first-child)]:mt-2 text-xs md:text-sm">
    //             Not sure where to start? We&apos;re here to help you all the
    //             way. Let us know what you need help with:
    //           </p>
    //           <ul className="list-none pt-6 flex flex-col gap-1 md:pb-24">
    //             <Link
    //               href="/templates"
    //               legacyBehavior
    //               passHref
    //             >
    //               <div className="flex gap-2 items-center text-link font-semibold text-xs md:text-sm hover:cursor-pointer">
    //                 Growing my audience
    //                 <Icons
    //                   name="ChevronRight"
    //                   className="h-4 w-4"
    //                 />
    //               </div>
    //             </Link>
    //             <Link
    //               href="/templates"
    //               legacyBehavior
    //               passHref
    //             >
    //               <div className="flex gap-2 items-center text-link font-semibold text-xs md:text-sm hover:cursor-pointer">
    //                 Selling more stuff
    //                 <Icons
    //                   name="ChevronRight"
    //                   className="h-4 w-4"
    //                 />
    //               </div>
    //             </Link>
    //             <Link
    //               href="/templates"
    //               legacyBehavior
    //               passHref
    //             >
    //               <div className="flex gap-2 items-center text-link font-semibold text-xs md:text-sm hover:cursor-pointer">
    //                 Getting more sign ups
    //                 <Icons
    //                   name="ChevronRight"
    //                   className="h-4 w-4"
    //                 />
    //               </div>
    //             </Link>
    //             <Link
    //               href="/templates"
    //               legacyBehavior
    //               passHref
    //             >
    //               <div className="flex gap-2 items-center text-link font-semibold text-xs md:text-sm hover:cursor-pointer">
    //                 I just want to see templates
    //                 <Icons
    //                   name="ChevronRight"
    //                   className="h-4 w-4"
    //                 />
    //               </div>
    //             </Link>
    //           </ul>
    //           <div className="absolute -bottom-4 left-4 md:left-0">
    //             <Icons
    //               name="LeafyGreen"
    //               className="h-8 w-8"
    //             />
    //           </div>
    //         </motion.div>
    //         <motion.div
    //           className="md:col-start-5 md:col-end-10 border-2 border-black border-b-0 rounded-t-md fade"
    //           variants={fade}
    //         >
    //           <Image
    //             src={screen1}
    //             alt="Picture of the author"
    //             className="object-cover object-center w-full h-full"
    //           />
    //         </motion.div>
    //       </motion.div>
    //     </div>
    //   </motion.section>

    //   <section className="text-gray-700 body-font py-12 bg-white border-t-2 border-slate-300">
    //     <motion.div
    //       className="container"
    //       variants={container}
    //       initial="hidden"
    //       animate="visible"
    //       exit="hidden"
    //     >
    //       <motion.h2
    //         className="scroll-m-20 text-2xl font-medium tracking-tight lg:text-3xl py-8 title"
    //         variants={title}
    //       >
    //         We also recommend these templates
    //       </motion.h2>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-8">
    //         {PRODUCTS_DB.map((product, index) => (
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
    //   </section>
    // </>
  );
}
