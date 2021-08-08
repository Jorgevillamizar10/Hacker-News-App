const Key_Storage = 'framework';

/**
 * saveFramework
 * * Function to save the last select framework 
 */
 export const saveFramework = (auxFrame:string) => {
  window.localStorage.setItem(Key_Storage, auxFrame);
}

/**
 * getFramework
 * * Function to return the framework saved in the localStorage of the app
 */

 export const getFramework = () => {
  const actualFrame = window.localStorage.getItem(Key_Storage);
  return actualFrame ? actualFrame : "";
}