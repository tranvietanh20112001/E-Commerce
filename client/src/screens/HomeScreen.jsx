import { useGetProductsQuery } from "../slices/productApiSlice";
import Product from "../components/Product";

export default function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <div>error?.data?.message || error?.error</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
