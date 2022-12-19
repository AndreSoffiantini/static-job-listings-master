import { useContext } from "react";
import GlobalContext from "../../../../Context/GlobalContext";
import classnames from "classnames";
import "./Card.css";

const Card = ({ details, show }) => {
  const { filterTags, AddTag, RemoveTag, ClearTags } =
    useContext(GlobalContext);

  return (
    <li className={classnames("card", { visible: show })} key={details.id}>
      <h4>{details.company}</h4>
      <h4>{details.position}</h4>
      <ul className="time_location_details">
        <li
          style={{ listStyle: "none" }}
          key={details.id.toString() + "-postedAt"}
        >
          {details.postedAt}
        </li>
        <li key={details.id.toString() + "-contract"}>{details.contract}</li>
        <li key={details.id.toString() + "-location"}>{details.location}</li>
      </ul>
      <hr></hr>
      {details.tags.map((tag) => {
        return <button onClick={() => AddTag(tag)}>{tag}</button>;
      })}
    </li>
  );
};

export default Card;
