import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = (props) => {
  const { imgSrc, time, date } = props;

  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: "-15px 20px 50px #0C4E8B  ",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className=" relative h-[53vh] w-[70vw]  mt-6 mb-4  sm:h-[550px] sm:w-[472px] rounded-xl bg-gradient-to-br from-indigo-900 to-violet-500"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid gap-y-4  place-items-center place-content-center text-white rounded-xl bg-indigo-950 shadow-lg"
      >
     
        <img src={imgSrc} alt="img" className=" h-2/3 round-image" />
        <div className=" text-lg text-blue-200">{time}</div>
        <div className=" text-lg text-blue-200">{date}</div>
        <button className="registerButton rounded-md px-4 py-2  text-blue-200 border  bg-slate-900 border-gray-300 transform transition-transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300">
          REGISTER
        </button>
      </div>
    </motion.div>
  );
};

export default TiltCard;
