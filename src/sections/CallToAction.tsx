"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import SpringImage from "@/assets/spring.png";
import StarImage from "@/assets/star.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const cta_ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cta_ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
      ref={cta_ref}
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <motion.img
            src={StarImage.src}
            alt="Star Image"
            width={360}
            className="hidden md:block absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Spring Image"
            width={360}
            className="hidden md:block absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
        </div>

        <div className="flex items-center gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
