import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import ProductList from "./components/products/ProductList";

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
  return (
    <div>
      <Header />
      <MainContainer>
        <Title>쇼핑몰</Title>
        <Routes>
          <Route path="/" element={<Title>메인 화면</Title>}></Route>
          <Route path="/about" element={<Title>정보</Title>}></Route>
          <Route path="/service" element={<Title>서비스</Title>}></Route>
          <Route path="/product" element={<ProductList />}></Route>
        </Routes>
      </MainContainer>
    </div>
  );
}

export default App;
