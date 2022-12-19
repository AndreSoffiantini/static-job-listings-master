import { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import GlobalReducer from "./GlobalReducer";

const GlobalProvider = ({ children }) => {
  const initialState = {
    filterTags: [],
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ dispatch, filterTags: state.filterTags }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
