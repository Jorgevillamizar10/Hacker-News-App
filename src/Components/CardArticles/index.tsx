import React, { useState } from "react";
import { dataProps } from "../../Types";
import * as timeago from 'timeago.js';
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

const CardArticles: React.FC<dataProps> = ({
  author,
  story_title,
  created_at
}) => {

  const [isActive, setIsActive] = useState(false);

  return(
    <StyledCard>
      <ContainerInformation>
        <TimeBox>
          <WatchImg src={Watch} alt="watch"/>
          <TimeText>{timeago.format(created_at ?? "")} by {author}</TimeText>
        </TimeBox>
        <StyledText>{story_title}</StyledText>
      </ContainerInformation>
      <BoxHeart>
        <HeartImg src={isActive ? Heart : EmptyHeart} alt="heart" onClick={() => setIsActive(!isActive)}/>
      </BoxHeart>
    </StyledCard>
  );
}

export default CardArticles;