import Logo from "@/assets/logosaas.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:w-full before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2f0b1,#2fd8fe)] before:absolute">
          <Image src={Logo} alt="Logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customers</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialYoutube />
          <SocialLinkedin />
          <SocialPin />
        </div>
        <p className="mt-6 text-center">
          &copy; 2024 Sudwipto Kumar Mondal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
