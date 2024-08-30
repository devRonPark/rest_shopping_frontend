import styled from "styled-components";

const ProductCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  text-align: center;
`;

const ProductName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 8px;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 16px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #000;
  margin: 0;
`;

const ProductBox = ({ product }) => {
  return (
    <ProductCard>
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price} 원</ProductPrice>
    </ProductCard>
  );
};

export default ProductBox;
