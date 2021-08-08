import React, { useState, useEffect } from "react";
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
  HeartImg,
  StyledAnchor
} from './styles';
import { destroyIdLike , getLike, saveLike } from "../../Helpers/Likes";

const CardArticles: React.FC<dataProps> = ({
  author,
  story_title,
  created_at,
  id,
  story_url
}) => {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let verify = getLike();
    verify.forEach((auxArticle:dataProps) => {
      if(auxArticle.objectID === id){
        setIsActive(true);
      }
    });
  },[id]);

  const handleLikes = (id: string) => {
    setIsActive(!isActive);
    if(isActive){
      destroyIdLike(id);
    }else if(!isActive){
      saveLike({
        objectID: id,
        created_at: created_at,
        story_title: story_title,
        author: author,
        story_url: story_url
      })
    }
  }

  return(
    <StyledCard>
      <StyledAnchor href={story_url} target="_blank">
        <ContainerInformation>
          <TimeBox>
            <WatchImg src={Watch} alt="watch"/>
            <TimeText>{timeago.format(created_at ?? "")} by {author}</TimeText>
          </TimeBox>
          <StyledText>{story_title}</StyledText>
        </ContainerInformation>
      </StyledAnchor>
      <BoxHeart>
        <HeartImg src={isActive ? Heart : EmptyHeart} alt="heart" onClick={() => handleLikes(id ?? "")}/>
      </BoxHeart>
    </StyledCard>
  );
}

export default CardArticles;