import { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalProvider = (props) => {
  const [filterTags, setFilterTags] = useState([]);

  const AddTag = (tag) => {
    if (!filterTags.includes(tag)) {
      setFilterTags([...filterTags, tag]);
    }
  };
  const RemoveTag = (key) => {
    const newTag = filterTags.filter((tag) => tag !== key);
    setFilterTags(newTag);
  };

  const ClearTags = () => {
    setFilterTags([]);
  };

  const tagsContext = {
    filterTags,
    AddTag,
    RemoveTag,
    ClearTags,
  };

  return (
    <GlobalContext.Provider value={tagsContext}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
