import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

function DetailProduct() {
  const [product, setProduct] = useState("");
  const router = useRouter();
  const fetchProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    if (router.query.id) {
      fetchProduct(router.query.id);
    }
  }, []);

  return (
    <>
      <h2 className="text-red-600 text-center my-5 text-3xl font-bold bungee-regular">
        Halaman Detail product
      </h2>
      <div className="card flex p-5 shadow-md rounded-md border items-center gap-5 mx-20 my-10">
        <div className="img mr-32">
          <img src={product.image} alt="" width={250} />
        </div>
        <div className="desc">
          <h3 className="font-bold text-2xl mt-2 text-blue-600 ">
            {product.title}
          </h3>
          <p className="font-normal mt-1">{product.description}</p>
          <h4 className="font-bold mt-5 text-2xl">USD {product.price}</h4>
          <div className="btn mt-5">
            <button className="py-2 px-4 bg-blue-600 rounded-md text-white font-semibold ">
              Buy Now
            </button>
            <button className="py-2 px-4 bg-red-600 rounded-md text-white font-semibold ml-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
