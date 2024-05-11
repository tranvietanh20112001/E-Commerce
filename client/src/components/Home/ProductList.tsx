import { RootState, AppDispatch } from "../../stores/index.store";
import { findallProducts } from "../../stores/product.store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductList = () => {
  const { products } = useSelector((state: RootState) => state.productState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findallProducts({}));
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: any) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
