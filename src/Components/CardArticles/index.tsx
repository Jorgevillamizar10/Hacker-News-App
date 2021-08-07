import React from "react";
import Heart from "../../Assets/Card/heart.png";
import EmptyHeart from "../../Assets/Card/emptyHeart.png";
import Watch from "../../Assets/Card/watch.png";

import {
  StyledCard,
  BoxHeart,
  TimeBox,
  StyledText,
  TimeText,
  ContainerInformation,
  WatchImg,
  HeartImg
} from './styles';

const CardArticles: React.FC = () => {
  return(
    <StyledCard>
      <ContainerInformation>
        <TimeBox>
          <WatchImg src={Watch} alt="watch"/>
          <TimeText>3 hours ago by author</TimeText>
        </TimeBox>
        <StyledText>Yes, React is taking over front-end development. The question is why.</StyledText>
      </ContainerInformation>
      <BoxHeart>
        <HeartImg src={Heart} alt="heart"/>
      </BoxHeart>
    </StyledCard>
  );
}

export default CardArticles;