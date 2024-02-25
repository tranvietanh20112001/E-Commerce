import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container py-3 mx-auto flex-grow">
        <h1>Hello</h1>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}
