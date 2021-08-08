export const getNumberPages = (limitPage: number) => {
  const obj:Array<number> = [];

  for(let x=0;x<limitPage;x++){
    obj.push(x);
  }

  return obj;
}

export const getHigherBracket = (currentPage:number, pageLimit:number) => currentPage + 3 >= pageLimit ? pageLimit - currentPage : 3 + (currentPage - 3 <= 0 ? 5 - currentPage: 0);

export const getLowerBracket = (currentPage:number, pageLimit:number) => currentPage - 3 <= 0 ? currentPage - 1 : 3 + (currentPage + 3 >= pageLimit ? 4 - (pageLimit - currentPage) : 0);