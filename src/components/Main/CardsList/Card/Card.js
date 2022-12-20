import { useContext } from "react";
import GlobalContext from "../../../../Context/GlobalContext";
import classnames from "classnames";
import "./Card.css";

const Card = ({ details }) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <li
      className={classnames("card", { featured_border: details.featured })}
      key={details.id}
    >
      <div className="card_container">
        <div className="card_container_left">
          <img className="logo" src={details.logo} alt="logo" />

          <div className="info">
            <h4
              style={{
                color: "var(--desaturated-dark-cyan)",
                display: "inline-block",
              }}
            >
              {details.company}
            </h4>

            <div className="card_top_labels">
              <div className={classnames("new_label", { hide: !details.new })}>
                New!
              </div>
              <div
                className={classnames("featured_label", {
                  hide: !details.featured,
                })}
              >
                Featured
              </div>
            </div>
            <h3 style={{ margin: "0.75rem 0" }}>{details.position}</h3>

            <ul className="time_location_details">
              <li
                style={{ listStyle: "none" }}
                key={details.id.toString() + "-postedAt"}
              >
                {details.postedAt}
              </li>
              <li key={details.id.toString() + "-contract"}>
                {details.contract}
              </li>
              <li key={details.id.toString() + "-location"}>
                {details.location}
              </li>
            </ul>
          </div>
        </div>

        <hr
          style={{ color: "var(--dark-grayish-cyan)", marginBottom: "0.5rem" }}
        ></hr>

        <div className="card_container_right">
          <div className="card_tags_container">
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
          </div>{" "}
        </div>
      </div>
    </li>
  );
};

export default Card;
