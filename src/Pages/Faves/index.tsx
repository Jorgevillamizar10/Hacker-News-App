import React from 'react';
import Articles from '../../Components/Articles/index';
import { getLike } from '../../Helpers/Likes';

import { StyledBox } from './styles';

const FavesPage:React.FC = () => {
  const favesData = getLike();

  return (
    <>
      {
        favesData.length > 0 ?
          <Articles data={favesData}/> :
          <StyledBox>
            <p>You still don't have favorite articles, add one !! :D</p>
          </StyledBox>
      }
    </>
  );

}

export default FavesPage;