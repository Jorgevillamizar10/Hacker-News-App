import React from 'react';
import { getFormatArray } from '../../Helpers/FormatArray';
import { ArticlesProps } from '../../Types';
import CardArticles from "../CardArticles/index";

import { StyledContainer, ContainerCards } from './styles';


const Articles:React.FC<ArticlesProps> = ({ data }) => {
  let dataSort = getFormatArray(data !== undefined ? data : []);

  console.log("here",dataSort);

  return (
    <StyledContainer>
      <ContainerCards>
        {
          dataSort?.map((article,index) => (
            <CardArticles key={index} {...article} />
          ))
        }
      </ContainerCards>
    </StyledContainer>
  );
}

export default Articles;