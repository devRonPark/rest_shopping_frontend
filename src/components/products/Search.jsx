import styled from "styled-components";
import ProductBox from "./ProductBox";

const Container = styled.main`
  max-width: 1025px;
  width: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Search = ({ productList }) => {
  return (
    <Container>
      <div>검색 결과</div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "auto" }}>
        {productList.length > 0 &&
          productList.map((product) => (
            <ProductBox key={product.id} product={product}></ProductBox>
          ))}
        {productList.length == 0 && (
          <div>검색어와 부합하는 상품이 존재하지 않습니다.</div>
        )}
      </div>
    </Container>
  );
};

export default Search;
