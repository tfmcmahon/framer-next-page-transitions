import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
      delay: 0,
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    // <div className="absolute inset-0 flex items-end justify-center">
    <motion.div
      className="absolute z-50 w-full bg-white flex items-center justify-center"
      initial="initial"
      animate="animate"
      variants={blackBox}
      // onAnimationStart={() => {
      //   const scrollBarWidth = window.innerWidth - document.body.clientWidth;

      //   document.body.style.marginRight = `${scrollBarWidth}px`;
      //   document.body.classList.add("overflow-hidden");
      // }}
      // onAnimationComplete={() => {
      //   console.log("complete");
      //   const scrollBarWidth = window.innerWidth - document.body.clientWidth;

      //   document.body.style.marginRight = "";
      //   document.body.classList.remove("overflow-hidden");
      // }}
    >
      <motion.svg
        className="absolute z-50 flex"
        variants={textContainer}
      >
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-gray-600"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-400 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          tailstore
        </text>
      </motion.svg>
    </motion.div>
    // </div>
  );
};

export default InitialTransition;
