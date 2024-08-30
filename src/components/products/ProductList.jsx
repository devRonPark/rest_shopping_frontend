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

const ProductList = () => {
  const productList = [
    {
      id: 1,
      name: "갤럭시버즈2프로",
      description:
        "삼성전자 갤럭시 버즈2 프로 무선 블루투스 이어폰 ANC SM-R510",
      price: 139000,
    },
    {
      id: 2,
      name: "원목 각인 디퓨저 실내방향제 100ml 집들이선물 A타입 네이처던",
      description:
        "자연의 향기를 가득 담은 원목 각인 디퓨저. 집들이 선물로 완벽한 선택이며, 100ml 용량으로 실내를 상쾌하게 유지합니다.",
      price: 19800,
    },
    {
      id: 3,
      name: "Holes - 『구덩이』 원서 (Paperback 미국판) - 루이스 새커",
      description:
        "루이스 새커의 대표작 『구덩이』의 원서입니다. 영어 공부와 함께 스릴 넘치는 이야기를 경험할 수 있는 기회입니다.",
      price: 5800,
    },
    {
      id: 4,
      name: "코나포유 세계3대커피 하와이 코나커피 100% 프라이빗 리저브 원두 200g [원산지:미국]",
      description:
        "세계 3대 커피 중 하나로 꼽히는 하와이 코나커피 100% 원두. 프라이빗 리저브로 특별한 맛을 경험할 수 있습니다.",
      price: 35000,
    },
    {
      id: 5,
      name: "춘자씨네 프리미엄 사과칩 10봉 아기 간식 선물 세트 [원산지:국산(충청북도 보은군)]",
      description:
        "충청북도 보은군에서 재배된 국산 사과로 만든 프리미엄 사과칩. 아기 간식으로 안성맞춤인 건강한 간식 세트입니다.",
      price: 32400,
    },
  ];

  return (
    <Container>
      <div>상품 목록</div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "auto" }}>
        {productList.map((product) => (
          <ProductBox key={product.id} product={product}></ProductBox>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
