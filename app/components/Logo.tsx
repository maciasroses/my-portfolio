import Image from "next/image";
import Link from "next/link";
import BlackLogo from "/public/Icons/JMaBlackWithoutBackground.webp";
import WhiteLogo from "/public/Icons/JMaWhiteWithoutBackground.webp";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center hover:animate-pulse hover:scale-105 duration-300"
    >
      <Image
        alt="Logo"
        src={WhiteLogo}
        className="block dark:hidden w-12 h-auto"
      />
      <Image
        alt="Logo"
        src={BlackLogo}
        className="hidden dark:block w-12 h-auto"
      />
      <p className="text-base xl:text-xl">JMa</p>
    </Link>
  );
};

export default Logo;
