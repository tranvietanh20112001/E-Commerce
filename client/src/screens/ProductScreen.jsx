import { useParams } from "react-router-dom";
export default function ProductScreen() {
  const { id } = useParams();
  console.log(id);
  return <div>ProductScreen</div>;
}
