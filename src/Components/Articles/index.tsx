import React, { useState } from 'react';
import CardArticles from "../CardArticles/index";
import { activeStyled } from "./helpers";
import { selectData } from './options';

import { StyledContainer, StyledSelect, ContainerCards } from './styles';


interface ValuesTypes {
  value: string;
  label: any;
};

const Articles:React.FC = () => {

  const [framework,setFramework] = useState();

  const handleSelectChange = (values: ValuesTypes) => {
    window.localStorage.setItem("filter", values.value);
    // setCurrentFilter(values);
  };

  return (
    <StyledContainer>
      <StyledSelect
        name="select-framework"
        onChange={handleSelectChange}
        value={framework}
        placeholder="Select your news"
        options={selectData}
        isSearchable={false}
        styles={{
          control: activeStyled,
        }}
      />
      <ContainerCards>
        <CardArticles />
        <CardArticles />
        <CardArticles />
        <CardArticles />
      </ContainerCards>
    </StyledContainer>
  );
}

export default Articles;