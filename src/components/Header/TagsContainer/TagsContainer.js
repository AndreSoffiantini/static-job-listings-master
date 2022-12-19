import { useContext } from "react";
import removeIcon from "../../../images/icon-close.svg";
import "./TagsContainer.css";

import GlobalContext from "../../../Context/GlobalContext";

const TagsContainer = () => {
  const { filterTags, dispatch } = useContext(GlobalContext);

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
                onClick={() => dispatch({ type: "REMOVE_TAG", tag })}
              />
            </div>
          );
        })}
      </div>
      <div className="tags_container_right">
        <button
          className="clear_btn"
          onClick={() => dispatch({ type: "CLEAR_TAGS" })}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TagsContainer;
