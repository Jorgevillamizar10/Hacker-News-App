import { selectData } from './options';

export const activeStyled = (styles: any, { isFocused, menuIsOpen }: any) => {
  if(isFocused || menuIsOpen){
    return {
      ...styles,
      border: "1px solid #2e2e2e !important",
      boxShadow: "0 0 0 1px #2e2e2e !important",
      borderRadius: "4px",
      fontFamily:"Roboto, sans-serif"
    }
  }else {
    return { ...styles, borderRadius: "4px" };
  }
}

export const getSelectFramework = (value: string | null) => {
  if(value === "angular") return selectData[0];
  if(value === "reactjs") return selectData[1];
  if(value === "vuejs") return selectData[2];
};