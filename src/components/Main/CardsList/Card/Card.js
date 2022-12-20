import { useContext } from "react";
import GlobalContext from "../../../../Context/GlobalContext";
import "./Card.css";

const Card = ({ details, show }) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <li className="card" key={details.id}>
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
        return (
          <button
            key={tag + " button"}
            onClick={() => dispatch({ type: "ADD_TAG", tag })}
          >
            {tag}
          </button>
        );
      })}
    </li>
  );
};

export default Card;
