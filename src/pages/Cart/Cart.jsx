import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, minusFromCart, removeFromCart } from "../../features/productsSlice";

function Cart() {
  const cartProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handlePlus = (products) => {
    dispatch(addToCart(products));
  };

  const handleMinus = (products) => {
    dispatch(minusFromCart(products));
  };

  const handleRemove = (products) => {
    dispatch(removeFromCart(products));
  };

  return (
    <div>
      <ul className="flex flex-col gap-4 px-4">
        {cartProducts.length ? (
          cartProducts.map((products) => {
            return (
              <li
                key={products.id}
                className="flex py-4 px-4 rounded-xl border border-gray items-center "
              >
                <img
                  src={products.image}
                  alt={products.title}
                  className="w-[100px] h-[100px] object-contain shirink-0"
                />

                <div className="flex flex-col justify-between ml-4 gap-4">
                  <h2 className="text-lg">{products.title}</h2>
                  <p>{products.description}</p>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xl">${products.price}</span>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleMinus(products)}
                          className="btn btn-primary"
                        >
                          <FaMinus />
                        </button>
                        <span className="px-4">{products.amount}</span>
                        <button
                          onClick={() => handlePlus(products)}
                          className="btn btn-primary"
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(products)}
                        className="btn btn-error"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <p className="text-center">Cart is empty</p>
        )}
      </ul>
    </div>
  );
}

export default Cart;
