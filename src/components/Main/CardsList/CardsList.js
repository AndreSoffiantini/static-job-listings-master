import { useContext, useMemo } from "react";
import Card from "./Card/Card";
import data from "../../../data.json";
import "./CardsList.css";
import GlobalContext from "../../../Context/GlobalContext";

const CardsList = () => {
  const { filterTags } = useContext(GlobalContext);

  const newData = useMemo(() => {
    return data.map((details) => {
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

      return newDetails;
    });
  }, []);

  const filteredData = useMemo(() => {
    return newData.filter((item) =>
      filterTags.every((tag) => item.tags.includes(tag))
    );
  }, [newData, filterTags]);

  return (
    <ul className="cards_list">
      {filteredData.map((details) => {
        return <Card key={details.id} details={details}></Card>;
      })}
    </ul>
  );
};

export default CardsList;
