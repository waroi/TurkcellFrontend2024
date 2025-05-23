import styled from 'styled-components';

export const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBox = styled.div`
  padding: 10px;
  border: 1px solid var(--foreground-color);
  border-radius: 40px 0 0 40px;
  width: 30rem;
  height: 40px;
  background-color: var(--background-color);
`;
export const ButtonDiv = styled.div`
  border: 1px solid #f2f2f2;
  border-radius:0 40px 40px 0;
`;

export const StyledInput = styled.input`
   border: none;
   background-color: var(--background-color);
   width: 25rem;
   &:focus {
    outline: none;
`;

export const MaterialIcons = styled.span`
  color: var(--primary-text-color);
  font-weight: 100;
  padding: 0 10px 0 10px;
`;
export const SearchButton = styled.button`
  border: none;
  border: 1px solid #f2f2f2;
  padding: 5px;
  border-radius: 0 40px 40px 0;
  background-color: var(--foreground-color);
  color: var(--primary-text-color);
  &:hover {
    background-color: var(--foreground-color);
    color: var(--secondary-text-color);
  }
`;



