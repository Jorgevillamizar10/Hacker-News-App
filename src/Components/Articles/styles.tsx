import styled from 'styled-components';
import Select from "react-select";

export const StyledSelect = styled(Select)`
  width: 240px;
  div div div {
    font-family: "Roboto",sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #343434;
  }
  div div span {
    display: none;
  }
`;

export const StyledContainer = styled.section`
  width: 100%;
  height:100vh;
  padding: 44px 1082px 0px 150px;
  & img{
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 13px;
  }

  & p{
    font-size: 14px;
    line-height: 1.57;
    color: #343434;
    margin: 0px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 5px 0px;
`;