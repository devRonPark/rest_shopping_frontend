import styled from "styled-components";
import axios from "axios";
import ProductBox from "./ProductBox";
import { useState } from "react";

const Container = styled.main`
  max-width: 1025px;
  width: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductList = ({ productList, setProductList }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:8080/product");
    const data = res.data;
    setProductList(data);
  };

  const handleInputChange = (evt) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleProductAdd = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:8080/product", newProduct);
    const data = res.data;
    setProductList((prevState) => [...prevState, data]);
    // 인풋 초기화
    setNewProduct({
      name: "",
      description: "",
      price: 0,
    });
  };

  const filterProduct = (id) => {
    setProductList((prevState) => prevState.filter((pr) => pr.id != id));
  };
  const modifyProduct = (editedProduct) => {
    setProductList((prevState) =>
      prevState.map((product) => {
        return product.id == editedProduct.id ? editedProduct : product;
      })
    );
  };

  return (
    <Container>
      <div>
        상품 목록
        <button onClick={fetchProducts}>가져오기</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "auto" }}>
        {productList.length > 0 &&
          productList.map((product) => (
            <ProductBox
              key={product.id}
              product={product}
              fetchProducts={fetchProducts}
              filterProduct={filterProduct}
              modifyProduct={modifyProduct}
            ></ProductBox>
          ))}
      </div>

      <form onSubmit={handleProductAdd}>
        <input
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <button type="submit">저장</button>
      </form>
    </Container>
  );
};

export default ProductList;
