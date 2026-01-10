import { data } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import useApi from "../../hooks/useApi";
import ProductCard from "../../components/ProductCard";
import Loading from "../../components/Loading/Loading";

function Home() {
  const { data, loading } = useApi();

  if (loading) return <Loading />;

  return (
    <>
      <div className="container">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data &&
            data.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </ul>
      </div>
    </>
  );
}

export default Home;
