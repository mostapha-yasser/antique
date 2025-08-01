"use client";
// import Image from "next/image";
// import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import NavLinks from "../headerComponent/NavLinks";
import CartIcon from "../../ui/CartIcon";
function Header() {
  // const { toggleAside } = ();
  return (
    <div className="px-2 sm:px-5 max-h-18 bg-headerBg max-w-screen
     text-white flex justify-evenly items-center
      border-b-2 border-main shadow-sm shadow-main">
      <Link href={"/"}>
        {/* <Image
        priority
          src={logo}
          alt="hestia logo"
          className="mr-4  w-20  h-20 pt-1 scale-165"
        /> */}
      </Link>
      <div className="">
        <NavLinks />
      </div>
      <div className="w-8/10 md:w-fit flex items-center justify-around ">
      <CartIcon />

      </div>
    </div>
  );
}

export default Header;
