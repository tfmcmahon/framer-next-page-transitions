"use client";

import { useMountContext } from "@/components/Context";
import InitialTransition from "@/components/InitialTransition";
import Product from "@/components/Product";
import { PRODUCTS_DB } from "@/constants/product-db";
import { motion } from "framer-motion";
import { useEffect } from "react";

const content = (isFirstMount: boolean) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const products = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Home() {
  const { isFirstMount, setIsFirstMount } = useMountContext();

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    setTimeout(() => {
      handleRouteChange();
    }, 3500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="index"
    >
      {isFirstMount && <InitialTransition />}

      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
        className="space-y-12"
      >
        <motion.h1
          variants={title}
          className="text-6xl font-black text-center text-gray-400"
        >
          Welcome to tailstore!
        </motion.h1>

        <motion.section
          variants={products}
          className="text-gray-700 body-font"
        >
          <div className="container px-5 pt-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              {PRODUCTS_DB.map((product, index) => (
                <Product
                  key={index}
                  {...product}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </motion.section>
  );
}
