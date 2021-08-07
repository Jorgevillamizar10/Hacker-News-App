import React, { useState } from 'react';
import { activeStyled } from "./helpers";
import { selectData } from './options';

import { StyledContainer, StyledSelect } from './styles';

interface ValuesTypes {
  value: string;
  label: any;
};

const Select:React.FC = () => {

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
    </StyledContainer>
  );
}

export default Select;