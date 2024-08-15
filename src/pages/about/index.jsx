import MetaHead from "@/components/MetaHead";
import React from "react";

function About() {
  return (
    <>
      <MetaHead title="About Us" />
      <img src="gunung.jpg" className="bg-cover w-full h-[550px]" alt="" />
      <div className="my-5 mx-20">
        <h2 className="font-bold text-2xl text-center text-red-600 bungee-regular">
          Tentang Kami
        </h2>
        <p className="mt-2 text-center font-semibold">
          Berasal dari kota kecil Örnsköldsvik di Swedia, tempat pegunungan dan
          hutan bertemu dengan laut, Fjällräven adalah perusahaan pakaian dan
          peralatan luar ruangan yang berkomitmen untuk membuat alam lebih mudah
          diakses. Dalam gaya Swedia sejati, kami fokus pada kesederhanaan dan
          kepraktisan, dan kami sangat menghormati lingkungan.
        </p>
        <h2 className="font-bold text-2xl text-center mt-2 text-red-600 bungee-regular ">
          Inilah yang kami lakukan:
        </h2>
        <div className="text-center">
          <p>
            - Mengembangkan perlengkapan outdoor yang fungsional, tahan lama,
            dan tak lekang oleh waktu
          </p>
          <p>
            {" "}
            - Bertindak secara bertanggung jawab terhadap alam, hewan, dan
            manusia
          </p>
          <p>
            {" "}
            - Menginspirasi dan mengembangkan minat dalam kehidupan di luar
            ruangan
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
