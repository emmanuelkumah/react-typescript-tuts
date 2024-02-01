import { createContext } from "react";

//type alias
type Theme = {
  color: string;
  background: string;
};
//export the ThemeContext and use in your component
const ThemeContext = createContext<Theme>({
  color: "white",
  background: "red",
});
