import React, { useState, useEffect } from 'react';
import { activeStyled } from "./helpers";
import { selectData } from './options';
import { saveFramework } from '../../Helpers/Framework';

import { StyledContainer, StyledSelect } from './styles';

interface ValuesTypes {
  value: string;
  label: any;
};

interface SelectProps {
  setFramework:React.ComponentState;
  framework:React.ComponentState;
};

const Select:React.FC<SelectProps> = ({ framework, setFramework }) => {

  const [stateSelect,setStateSelect] = useState<Object>();

  useEffect(() => {
    if(framework === "angular") setStateSelect(selectData[0]);
    if(framework === "reactjs") setStateSelect(selectData[1]);
    if(framework === "vuejs") setStateSelect(selectData[2]);
  },[framework]);

  const handleSelectChange = (values: ValuesTypes) => {
    saveFramework(values.value);
    setFramework(values.value);
    setStateSelect(values);
  };

  return (
    <StyledContainer>
      <StyledSelect
        name="select-framework"
        onChange={handleSelectChange}
        value={stateSelect}
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