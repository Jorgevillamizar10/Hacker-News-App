import styled, {css} from 'styled-components';


export const StyledContainer = styled.section`
  width: 100%;
  height:auto;
  padding: 0px 150px 150px 150px;
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

  @media(max-width:900px){
    padding: 0px 5% 100px 5%;
  }
  @media(max-width:450px){
    padding: 0px 5% 30px 5%;
  }
`;

interface ContainerCardsProps {
  flagArticles: Boolean;
}

export const ContainerCards = styled.div<ContainerCardsProps>`
  width: 100%;
  height: auto;
  /* background:red; */
  margin-top:10px;
  display: flex;
  ${
    ({flagArticles}) => flagArticles ?
    css`
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap; 
    `
    : 
    css `
      height: 30vh;
      align-items: center;
      justify-content: center;
    `
  }
  @media(max-width:900px){
    align-items: center;
    justify-content: center;
  }
`;

export const StyledMessage = styled.span`
  font-size: 24px;
  font-weight: 400;
  @media(max-width:740px){
    font-size: 18px;
  }
  @media(max-width:550px){
    font-size: 14px;
    text-align:Center;
  }
`;