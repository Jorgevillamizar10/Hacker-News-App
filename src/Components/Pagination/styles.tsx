import styled,{ css } from 'styled-components';

interface StyledCardProps {
  active?:Boolean;
}

export const ContainerPagination = styled.section`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:120px;
`;

export const StyledCard  = styled.div<StyledCardProps>`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 0 8px 0 0;
  padding: 9px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  cursor:pointer;
  ${
    ({active}) => active ?
      css`
        background-color: #1890ff;
        color:white;
      ` :
      css`
        background-color: #fff;
        color: rgba(0, 0, 0, 0.65);
      
      `
  }
  &svg{
    width: 7px;
    height: 10px;
  }
  &span{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: center;
  }
  &:hover{
    background-color: #1890ff;
    color:white;
  }
`;