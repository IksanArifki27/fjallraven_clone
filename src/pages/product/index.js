import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@/components/Loading";
import MetaHead from "@/components/MetaHead";

function Products() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const getData = async () => {
    setIsloading(true);
    const datas = await fetch("https://fakestoreapi.com/products?limit=6");
    const data = await datas.json();
    setProduct(data);
    setIsloading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="product-page">
      <MetaHead title="Product" />
      <h1 className="text-center text-4xl my-4 font-bold text-red-600 bungee-regular">
        Halaman Product
      </h1>
      <br />
      <div className="flex flex-wrap gap-2 my-4 justify-center">
        {product.map((item, index) => (
          <div className="py-8 px-4 border gap-3 rounded-md shadow-md text-wrap hover:shadow-xl  ">
            <img src={item.image} alt="" width={90} className="mx-auto" />
            <h4 key={item.id} className="font-bold text-xl text-center my-2 ">
              {" "}
              {item.title.substring(0, 20)}...
            </h4>
            <p className="font-bold">USD {item.price}</p>
            <p>{item.description.substring(0, 50)}...</p>
            <br />
            <Link
              className=" bg-red-600 md:py-2 md:px-4 text-white font-bold rounded-md shadow-sm mt-16 hover:bg-blue-600 py-2 px-4 mx-20  gap-6 "
              href={`/product/${item.id}`}
            >
              detail Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
