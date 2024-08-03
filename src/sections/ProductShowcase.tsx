"use client";

import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ProductShowcase = () => {
  const product_ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: product_ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
      ref={product_ref}
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost Productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>

        <div className="relative">
          <Image src={ProductImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={PyramidImage.src}
            alt="Pyramid Image"
            className="absolute hidden md:block -right-36 -top-32"
            height={262}
            width={262}
            style={{ translateY }}
          />
          <motion.img
            src={TubeImage.src}
            alt="Tube Image"
            className="absolute hidden md:block bottom-24 -left-36"
            height={248}
            width={248}
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
