import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductList = ({ productId = 100 }) => {
  return (
    <div>
      <h2>
        {" "}
        <Link href="/product/1">Product 1 </Link>
      </h2>
      <h2>
        {" "}
        <Link href="/product/2">Product 2 </Link>
      </h2>
      <h2>
        <Link href="/product/2">Product 3</Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h2>

      <Link href="/">Home</Link>
    </div>
  );
};

export default ProductList;
