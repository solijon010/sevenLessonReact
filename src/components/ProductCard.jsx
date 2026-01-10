import React from "react";
import { addToCart } from "../features/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { id, image, title, description, price } = product;
  const dispatch = useDispatch();

  return (
    <li className="card bg-accent-content shadow-sm cursor-pointer">
      <Link to={`/product/${id}`}>
        <figure className="bg-base-300 py-3">
          <img
            className="w-full h-[200px] object-contain"
            src={image}
            alt={title}
          />
        </figure>
      </Link>

      <div className="card-body">
        <Link to={`/product/${id}`}>
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </p>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-xl">$ {price}</span>

          {/* Add Cart bosilganda navigate bo'lmaydi */}
          <button
            onClick={() => dispatch(addToCart(product))}
            className="btn btn-primary"
          >
            Add Cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
