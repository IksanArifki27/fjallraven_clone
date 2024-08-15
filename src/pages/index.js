import React from "react";
import Link from "next/link";
import MetaHead from "@/components/MetaHead";

function index() {
  return (
    <div className="hero w-full">
      <MetaHead title="Home Page" />
      <div class="mx-auto max-w-2xl py-25 sm:py-28 lg:py-15 ">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bungee-regular">
            Explore The High Coasts Collection
          </h1>
          <p class="mt-6 text-lg leading-8 text-white font-semibold">
            Kami membuat produk untuk kenangan seumur hidup. Datang lebih dekat
            ke alam dengan Fjällräven dan rasakan alam seperti yang kita
            lakukan.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/product"
              class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm  hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
