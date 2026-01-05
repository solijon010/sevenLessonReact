import React from 'react'
import { addToCart } from '../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductCard({product}) {
    const {image, title, description, price} = product;

    // const cartProducts = useSelector((state)=>state.products)

    const dispatch = useDispatch()
    
    const addCart = ()=>{
      dispatch(addToCart({...product}));
    };

  return (
    <li className="card bg-accent-content  shadow-sm">
    <figure className="bg-base-300 py-3">
      <img
      className="w-full h-[200px] object-contain"
        src={image}
        alt={title} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>
        {description.length > 150 
        ? description.slice(0, 150)+"..." 
        : description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xl">$ {price}</span>
        <button onClick={addCart} className="btn btn-primary">Add Cart</button>
      </div>
    </div>
  </li>
  )
}

export default ProductCard