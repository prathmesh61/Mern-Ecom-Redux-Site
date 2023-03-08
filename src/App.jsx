import { useEffect, useState } from "react";

import axios from "axios";

import ProductCard from "./components/ProductCard.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const [prodInfo, setprodInfo] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:7090/products");
      setprodInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main>
        <Navbar />

        <div className="p-8">
          <div className="flex flex-wrap gap-12">
            {prodInfo.map((prod, index) => (
              <div key={index}>
                <ProductCard
                  key={prod._id}
                  name={prod.name}
                  description={prod.description}
                  price={prod.price}
                  picture={prod.picture}
                  category={prod.category}
                  prod={prod}
                  quantity={prod.quantity}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
