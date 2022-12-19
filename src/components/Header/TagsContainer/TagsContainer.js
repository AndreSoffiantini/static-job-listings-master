import { useContext } from "react";
import removeIcon from "../../../images/icon-close.svg";
import "./TagsContainer.css";

import GlobalContext from "../../../Context/GlobalContext";

const TagsContainer = () => {
  const { filterTags, RemoveTag, ClearTags } = useContext(GlobalContext);

  return (
    <div className="tags_container">
      <div className="tags_container_left">
        {filterTags?.map((tag) => {
          return (
            <div className="tag">
              <div>{tag}</div>
              <img
                src={removeIcon}
                alt="remove"
                className="remove_icon"
                onClick={() => RemoveTag(tag)}
              />
            </div>
          );
        })}
      </div>
      <div className="tags_container_right">
        <button className="clear_btn" onClick={() => ClearTags()}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TagsContainer;
