import { dataProps } from "../Types";

export const getFormatArray = (auxData: Array<dataProps>) => {
  return auxData.map((article) => {
      if(
        article?.author &&
        article?.created_at &&
        article?.story_title &&
        article?.story_url
      ){
        const { objectID, author, created_at, story_title, story_url } = article;

        console.log("entro");

        return {id: objectID, author, created_at, story_title, story_url };
      }else{
        return undefined;
      }
    })
    .filter(Boolean);
}