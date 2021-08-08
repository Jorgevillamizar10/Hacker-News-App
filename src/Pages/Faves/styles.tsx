import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  & p{
    font-size: 25px;
    font-weight: normal;
    font-family: 'Roboto',sans-serif;
    letter-spacing: 0.25px;
    color: #6b6b6b;
    @media(max-width:620px){
      font-size: 18px;
    }
    @media(max-width:430px){
      font-size: 14px;
    }
  }
  @media(max-width:620px){
    height: 30vh;
  }
`;