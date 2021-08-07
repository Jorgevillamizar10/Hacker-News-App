import React,{ useState } from 'react';
import { StyledContainer, StyledSelect } from './styles';
import { activeStyled } from "./helpers";
import { selectData } from './options';


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
    </StyledContainer>
  );
}

export default Articles;