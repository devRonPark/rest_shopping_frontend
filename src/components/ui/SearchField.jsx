import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa"; /* 돋보기 아이콘 가져오기 */

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  position: relative; /* 검색 버튼을 인풋 안쪽에 위치시키기 위해서 */
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 20px; /* 둥근 모서리 */
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #555;
  }

  &:focus {
    outline: none;
  }
`;

const SearchField = () => {
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
  };
  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchInput
        type="search"
        name="keyword"
        placeholder="검색어를 입력하세요..."
        value={keyword}
        onChange={handleKeywordChange}
      />

      <SearchButton type="submit">
        <FaSearch />
      </SearchButton>
    </SearchForm>
  );
};

export default SearchField;
