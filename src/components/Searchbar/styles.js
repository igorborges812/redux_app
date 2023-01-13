import styled from 'styled-components'

export const SearchbarContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e5e4e6;
  display: flex;
  align-items: center;
  padding: 4px 0 4px 12px;
  border-radius: 7px;

  /* position: absolute; */
  left: 3.82%;
  right: 75.14%;

  svg {
    cursor: pointer;

    path {
      fill: #e5e4e5;
    }

    &:hover {
      path {
        fill: gray;
      }
    }
  }

  &:hover,
  &:focus-within {
    border-color: gray;
  }
`

export const SearchbarInput = styled.input`
  border: none;
  flex: 1;
  margin: 0;

  -webkit-appearance: none;

  font-size: 16px;

  padding: 0px 10px;
  height: 35px;
  /* border-radius: 4px; */
  transition: border-color 200ms linear;
  :hover,
  :focus {
    border-color: #d0c9d6;
  }

  &::placeholder {
    font-size: 16px;
    color: #d0c9d6;
  }
`
