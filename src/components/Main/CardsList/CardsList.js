import { useContext } from "react";
import Card from "./Card/Card";
import data from "../../../data.json";
import "./CardsList.css";
import GlobalContext from "../../../Context/GlobalContext";

const CardsList = () => {
  const { filterTags, AddTag, RemoveTag, ClearTags } =
    useContext(GlobalContext);

  return (
    <ul className="cards_list">
      {data.map((details) => {
        const tags = [
          details.role,
          details.level,
          ...details.languages,
          ...details.tools,
        ];
        const { ...newDetails } = details;

        delete newDetails.role;
        delete newDetails.level;
        delete newDetails.languages;
        delete newDetails.tools;
        newDetails.tags = tags;

        let show = true;

        if (filterTags?.length) {
          filterTags.forEach((tag) => {
            if (!newDetails.tags.includes(tag)) {
              show = false;
            }
          });
        }

        return <Card details={newDetails} show={show}></Card>;
      })}
    </ul>
  );
};

export default CardsList;
