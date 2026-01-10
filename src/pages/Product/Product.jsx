import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/productsSlice";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <h2 className="text-center mt-10">Product topilmadi</h2>;
  }

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[400px] object-contain"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="mb-4 text-gray-600">{product.description}</p>
        <p className="text-2xl font-semibold mb-6">$ {product.price}</p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="btn btn-primary"
        >
          Add Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
