import { ENTRYPOINT, DEFAULTURL } from '../Config/index';

interface fetchDataProps {
  endpoint?: string;
  page: number;
}

export const fetchData = async ({ endpoint, page } :fetchDataProps) => {
  const url = `${ENTRYPOINT}query=${endpoint}&page=${page}`;
  let response;

  if(endpoint){
    response = await fetch(url);
    return response.json();
  }else{
    response = await fetch( `${DEFAULTURL}${page}`);
    return response.json();
  }
}