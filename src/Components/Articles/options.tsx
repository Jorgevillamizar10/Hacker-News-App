import { SelectContainer } from "./styles";

import AngularImg from "../../Assets/Select/angular.png";
import ReactImg from "../../Assets/Select/react.png";
import VueImg from "../../Assets/Select/vue.png";

export const selectData = [
  {
    value: "angular",
    label: (
      <SelectContainer>
        <img src={AngularImg} alt="Angular Image" />
        <p>Angular</p>
      </SelectContainer>
    ),
  },
  {
    value: "reactjs",
    label: (
      <SelectContainer>
        <img src={ReactImg} alt="React Image" />
        <p>React</p>
      </SelectContainer>
    ),
  },
  {
    value: "vuejs",
    label: (
      <SelectContainer>
        <img src={VueImg} alt="Vuejs Image" />
        <p>Vuejs</p>
      </SelectContainer>
    ),
  },
];