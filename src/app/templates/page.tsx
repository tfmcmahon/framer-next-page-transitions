"use client";

import Product from "@/components/Product";
import { PRODUCTS_DB } from "@/constants/product-db";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import screen2 from "~/public/images/screen2-dt.webp";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    y: -300,
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

export default function Templates() {
  const router = useRouter();
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
    setTimeout(() => {
      router.push("/");
    }, 150);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {show && (
          <motion.section
            key="templates"
            className="relative h-[641px] md:h-[406px] xl:h-[513px] 2xl:h-[620px]"
          >
            <motion.div
              className="absolute border-b-2 pt-8 border-tertiary h-[641px] md:h-[406px] xl:h-[513px] 2xl:h-[620px] w-screen b-0 l-0"
              variants={grid}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={title}
                className="container flex flex-col justify-center md:justify-end h-full pb-6 md:pb-8"
                exit={{ opacity: 0 }}
              >
                <p className="scroll-m-20 text-md pt-0 font-medium tracking-tight lg:text-lg md:pt-12 sm:-ml-2">
                  You wanted help with:
                </p>
                <p className="scroll-m-20 text-md font-medium tracking-tight lg:text-lg sm:-ml-2">
                  Selling more stuff
                </p>
              </motion.div>
            </motion.div>
            <motion.div className="flex h-full overflow-hidden md:grid flex-col md:grid-rows-1 md:grid-cols-9 gap-8 container relative pt-12 md:pt-4">
              <motion.div
                variants={fade}
                className="md:col-start-1 md:col-end-5 w-full h-full flex flex-col gap-4 justify-center xl:justify-end xl:pb-16 2xl:pb-32"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                <h1 className="scroll-m-20 text-xl font-medium tracking-tight lg:text-2xl md:pt-12">
                  We recommend the landing page template: Victoria
                </h1>
                <p className="text-xs md:text-sm">
                  Victoria is a clean landing page template ideal for regular
                  promotions and featured products
                </p>
                <div className="flex gap-2">
                  <div onClick={handleClick}>
                    <p
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-link text-white hover:cusor-pointer hover:bg-link/80 hover:text-white"
                      )}
                    >
                      Select template
                    </p>
                  </div>
                  <div onClick={handleClick}>
                    <p
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "border-2 border-black bg-transparent hover:cusor-pointer hover:bg-slate-200"
                      )}
                    >
                      View template
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="md:col-start-5 md:col-end-10 border-2 border-black border-b-0 rounded-t-md fade"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Image
                  src={screen2}
                  alt="Picture of the author"
                  className="object-cover object-center w-full h-full"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {show && (
          <motion.section
            key="temp-products"
            className="text-gray-700 body-font py-12 bg-white border-t-2 border-slate-300"
          >
            <motion.div
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              <motion.h2
                className="scroll-m-20 text-2xl font-medium tracking-tight lg:text-3xl py-8 title"
                variants={title}
              >
                Today&apos;s most popular templates
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-8">
                {PRODUCTS_DB.toReversed().map((product, index) => (
                  <motion.div
                    variants={products}
                    key={index}
                    className="products"
                  >
                    <Product {...product} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
