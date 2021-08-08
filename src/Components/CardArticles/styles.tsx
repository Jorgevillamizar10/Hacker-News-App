import styled from 'styled-components';

export const StyledCard = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  height: 90px;
  margin: 38px 0px 30px 0px;
  border-radius: 6px;
  border: 1px solid rgba(151, 151, 151, 0.8);
  background-color: #fff;
  cursor:pointer;
  transition: opacity 0.3s;
  opacity: 1;
  &:hover{
    opacity: 0.4;
  }
`;

export const ContainerInformation = styled.div`
  padding: 10px 15px 10px 26px;
  width: 482px;
`;

export const BoxHeart = styled.div`
  width: 68px;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 16px;
  /* padding: 35px 22px 33px; */
  border-radius: 6px;
  border: none;
  background-color: rgba(96,96,96,0.06);
`;

export const HeartImg = styled.img`
  width: 24px;
  height: 22px;
  object-fit: contain;
  cursor: pointer;
  margin: 0 !important;
`;

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0px 8px 6px 0;
`;

export const WatchImg = styled.img`
  width: 16px !important;
  height: 16px !important;
  object-fit: contain;
`;

export const StyledText = styled.p`
  margin: 0px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`;

export const TimeText = styled.p`
  margin: 0px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
`;