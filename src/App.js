import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import ProductList from "./components/products/ProductList";
import Search from "./components/products/Search";
import { useState } from "react";

const Title = styled.h1`
  text-align: center;
`;

const MainContainer = styled.div`
  margin: 60px auto;
`;

const MainContent = styled.main`
  max-width: 1025px;
`;

function App() {
  const [productList, setProductList] = useState([]);

  return (
    <div>
      <Header setProductList={setProductList} />
      <MainContainer>
        <Title>쇼핑몰</Title>
        <Routes>
          <Route path="/" element={<Title>메인 화면</Title>}></Route>
          <Route path="/about" element={<Title>정보</Title>}></Route>
          <Route path="/service" element={<Title>서비스</Title>}></Route>
          <Route
            path="/product"
            element={
              <ProductList
                productList={productList}
                setProductList={setProductList}
              />
            }
          ></Route>
          <Route
            path="/search"
            element={
              <Search
                productList={productList}
                setProductList={setProductList}
              />
            }
          ></Route>
        </Routes>
      </MainContainer>
    </div>
  );
}

export default App;
