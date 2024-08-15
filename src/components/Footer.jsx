import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="md:flex bg-slate-300 text-white font-bold justify-between items-center py-5 ">
        <div className="logo md:ml-10 mx-28">
          <img src="logo_baru.png" alt="" width={200} />
        </div>
        <div className="menu md:mr-40  text-center font-semibold">
          <ul>
            <li>
              <Link className="text-black font-semibold" href={"/Home"}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-black font-semibold" href={"/about"}>
                Tentang Kami
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-black font-semibold" href={"/products"}>
                Product Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
