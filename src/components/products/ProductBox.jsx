import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ProductCard = styled.div`
  box-sizing: border-box;
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

const ProductBox = ({
  product,
  fetchProducts,
  filterProduct,
  modifyProduct,
}) => {
  const [isUpdateBtnClicked, setIsUpdateBtnClicked] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const toggleUpdate = () => {
    setIsUpdateBtnClicked(!isUpdateBtnClicked);
  };
  const handleInputChange = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;

    setProductToUpdate((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const handleUpdate = async () => {
    const editedProductInfo = { ...productToUpdate, id: product.id };
    const res = await axios.patch(
      "http://localhost:8080/product",
      editedProductInfo
    );
    const data = res.data; // 수정된 상품 정보
    // 상품 리스트에 기존의 상품 정보 대신 수정된 상품 정보 업데이트
    modifyProduct(data);
    // 수정 모드 해제
    toggleUpdate();
  };

  const handleDelete = async () => {
    try {
      console.log(product.id + "를 삭제한다.");
      const res = await axios.delete(
        `http://localhost:8080/product/${product.id}`
      );
      filterProduct(product.id);
    } catch {
      console.log("이미 삭제된 상품입니다.");
      fetchProducts();
    }
  };

  useEffect(() => {
    if (isUpdateBtnClicked) {
      setProductToUpdate({
        name: product.name,
        description: product.description,
        price: product.price,
      });
    } else {
      setProductToUpdate({
        name: "",
        description: "",
        price: 0,
      });
    }
  }, [isUpdateBtnClicked]);
  return (
    <ProductCard>
      {!isUpdateBtnClicked ? (
        <>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{product.price} 원</ProductPrice>
          <div>
            <button onClick={toggleUpdate}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            name="name"
            value={productToUpdate.name}
            onChange={handleInputChange}
          />{" "}
          <br />
          <input
            type="text"
            name="description"
            value={productToUpdate.description}
            onChange={handleInputChange}
          />{" "}
          <br />
          <input
            type="number"
            name="price"
            value={productToUpdate.price}
            onChange={handleInputChange}
          />
          <div>
            <button onClick={handleUpdate}>수정</button>
            <button onClick={toggleUpdate}>취소</button>
          </div>
        </>
      )}
    </ProductCard>
  );
};

export default ProductBox;
