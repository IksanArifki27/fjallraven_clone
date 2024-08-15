import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-5">
      <img src="logo.png" alt="" width={400} />
      <h3 className="font-semibold text-red-600 text-xl">Halaman Memuat...</h3>
    </div>
  );
}

export default Loading;
