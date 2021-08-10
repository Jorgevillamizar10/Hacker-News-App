import React from 'react';
import { getFormatArray } from '../../Helpers/FormatArray';
import { ArticlesProps } from '../../Types';
import CardArticles from "../CardArticles/index";

import { 
  StyledContainer,
  ContainerCards,
  StyledMessage 
} from './styles';


const Articles:React.FC<ArticlesProps> = ({ data }) => {

  let dataSort = getFormatArray(data ?? []);
  
  return (
    <StyledContainer>
      <ContainerCards flagArticles={ dataSort.length > 0 ? true : false}>
        {
          dataSort.length > 0 ?
          dataSort?.map((article,index) => (
            <CardArticles key={index} {...article} />
          )) :
          <StyledMessage>
            En esta pagina no hay articulos por favor ve a la siguiente :D!
          </StyledMessage>
        }
      </ContainerCards>
    </StyledContainer>
  );
}

export default Articles;