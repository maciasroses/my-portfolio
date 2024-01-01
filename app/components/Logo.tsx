import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center hover:animate-pulse hover:scale-105 duration-300"
    >
      <div className="size-12 relative">
        <Image
          alt="Logo"
          src="/Icons/JMaWhiteWithoutBackground.webp"
          fill
          sizes="100%"
          className="block dark:hidden size-full object-cover"
        />
        <Image
          alt="Logo"
          src="/Icons/JMaBlackWithoutBackground.webp"
          fill
          sizes="100%"
          className="hidden dark:block size-full object-cover"
        />
      </div>
      <p className="text-base xl:text-xl">JMa</p>
    </Link>
  );
};

export default Logo;
