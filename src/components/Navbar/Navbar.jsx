import React from 'react'
import { MdShoppingCart } from 'react-icons/md' 
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {

  const cartProducts = useSelector((state) => state.products)

  return (
    <header className="navbar bg-base-100 shadow-md">
    <div className="container flex items-center">
    <Link to={"/"} className="btn btn-ghost text-xl mr-auto">
        Yandex go
    </Link>
    <button className="relative">
      {!!cartProducts.length && <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-primary rounded-2xl w-6">
        {cartProducts.length}
      </span>}
    <MdShoppingCart size={24} />
    </button>
    </div>
</header>
  )
}

export default Navbar