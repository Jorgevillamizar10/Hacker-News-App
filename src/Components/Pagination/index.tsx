import React from 'react';
import { ContainerPagination, StyledCard } from './styles';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { getLowerBracket, getHigherBracket, getNumberPages } from './utils';

interface PaginationProps {
  page: number;
  setPage: React.ComponentState;
  limitPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, limitPage }) => {
  const obj:Array<number> = getNumberPages(limitPage);

  const onMorePage = () => {
    if(page < limitPage){
      setPage(page++);
    }
  }

  const onLessPage = () => {
    if(page > 1){
      setPage(page - 2);
    }
  }

  return (
    <ContainerPagination>
      <StyledCard onClick={() => onLessPage()}>
        <AiOutlineLeft />
      </StyledCard>
      {
        obj.map((Auxpage,index: number) => 
          Auxpage === 1 || (Auxpage >= page - getLowerBracket(page,limitPage) && Auxpage <= page + getHigherBracket(page,limitPage)) ? 
            (
              <StyledCard active={Auxpage === page ? true : false } key={index} onClick={() => setPage(Auxpage - 1)}>
                <span>{Auxpage}</span>
              </StyledCard>
            ): null)
      }
      <StyledCard onClick={() => setPage(limitPage - 1)} active={limitPage === page ? true : false }>
        { limitPage }
      </StyledCard>
      <StyledCard onClick={() => onMorePage()}>
        <AiOutlineRight />
      </StyledCard>
    </ContainerPagination>
  )
}

export default Pagination;
