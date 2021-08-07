import styled from 'styled-components';


export const StyledContainer = styled.section`
  width: 100%;
  height:auto;
  padding: 0px 150px 150px 150px;
  /* background:Red; */
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

export const ContainerCards = styled.div`
  width: 100%;
  height: auto;
  /* background:red; */
  margin-top:10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;