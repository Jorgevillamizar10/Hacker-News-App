import { dataProps } from "../Types";

const ID_Like = 'like';

/**
 * getLike
 * * Function to return like saved in the localStorage of the app
 */

export const getLike = () => {
  const like = window.localStorage.getItem(ID_Like)
  return like ? JSON.parse(like) : []
}

/**
 * saveLike
 * * Function to save like in the localStorage
 */
export const saveLike = (like:dataProps) => {
  let Sliked = getLike();
  Sliked.push(like);

  window.localStorage.setItem(ID_Like, JSON.stringify(Sliked))
}

/**
 * destroyLike
 * * Function to destroy like saved in localStorage
 */
export const destroyLike = () => {
  window.localStorage.removeItem(ID_Like)
}

export const destroyIdLike = (id: string) => {
  let position = null;
  let articles = getLike();
  articles.forEach((infor: dataProps,index: number) => {
    if(infor.id === id){
      position = index;
    }
  })

  articles.splice(position,1);
  window.localStorage.setItem(ID_Like, JSON.stringify(articles))
}