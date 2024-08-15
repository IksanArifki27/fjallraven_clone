import { useRouter } from "next/router";
import React from "react";

function slug() {
  const router = useRouter();
  const { id } = router.query;
  console.log("isi router " + id);
  return <div>halaman slug</div>;
}

export default slug;
