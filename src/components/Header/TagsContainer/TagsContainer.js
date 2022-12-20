import { useContext } from "react";
import classnames from "classnames";
import "./TagsContainer.css";

import GlobalContext from "../../../Context/GlobalContext";

const TagsContainer = () => {
  const { filterTags, dispatch } = useContext(GlobalContext);

  return (
    <div
      className={classnames("tags_container", { hide: !filterTags?.length })}
    >
      <div className="tags_container_left">
        {filterTags?.map((tag) => {
          return (
            <div key={tag + " header button"} className="tag">
              <div>{tag}</div>
              <img
                src="./images/icon-remove.svg"
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
