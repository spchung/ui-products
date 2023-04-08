import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import {ProductList, Product} from "./components/ProductList/ProductList";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const handleSearch = async (query: string) => {
    const baseUrl = import.meta.env.VITE_CHAT_API_URL;
    const url = `${baseUrl}/v1/chat/`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "query": query
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(url, requestOptions);

    const data = await response.json();
    const products = data as Product[];
    setProducts(products);
  };

  return (
    <div className="App flex-column-container">
      <Header title="Chat Ecommerce" />
      <UserInput onSearch={handleSearch} />
      <ProductList products={products} />
    </div>
  );
}

export default App;