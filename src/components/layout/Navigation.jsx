import styled from "styled-components";

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  align-items: center;

  li + li {
    margin-left: 20px;
  }
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
`;

const MenuLink = styled.a`
  display: block;
  cursor: pointer;

  text-decoration: none; /* 링크 밑줄 제거 */
  color: #333; /* 텍스트 색상 */
  font-size: 16px; /* 텍스트 크기 */
  padding: 8px 12px; /* 패딩으로 클릭 영역 확대 */
  border-radius: 4px; /* 약간의 둥근 모서리 */

  &:hover {
    background-color: #f0f0f0; /* 마우스 오버 시 배경색 변경 */
    color: #000; /* 마우스 오버 시 텍스트 색상 변경 */
  }

  &:active {
    background-color: #ddd; /* 클릭 시 배경색 변경 */
  }
`;

const Navigation = () => {
  const menuList = [
    { link: "/about", name: "ABOUT" },
    { link: "/service", name: "SERVICE" },
    { link: "/product", name: "PRODUCT" },
  ];
  return (
    <nav>
      <MenuList>
        {menuList.map((menuItem, idx) => (
          <MenuItem key={idx}>
            <MenuLink href={menuItem.link}>{menuItem.name}</MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </nav>
  );
};

export default Navigation;
