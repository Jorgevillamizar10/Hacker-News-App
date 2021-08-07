import { SelectContainer } from "./styles";

import AngularImg from "../../Assets/Select/angular.png";
import ReactImg from "../../Assets/Select/react.png";
import VueImg from "../../Assets/Select/vue.png";

export const selectData = [
  {
    value: "angular",
    label: (
      <SelectContainer>
        <img src={AngularImg} alt="Angular" />
        <p>Angular</p>
      </SelectContainer>
    ),
  },
  {
    value: "reactjs",
    label: (
      <SelectContainer>
        <img src={ReactImg} alt="React" />
        <p>React</p>
      </SelectContainer>
    ),
  },
  {
    value: "vuejs",
    label: (
      <SelectContainer>
        <img src={VueImg} alt="Vuejs" />
        <p>Vuejs</p>
      </SelectContainer>
    ),
  },
];