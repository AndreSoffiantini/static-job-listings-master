import { useContext } from "react";
import CardsList from "./CardsList/CardsList";
import GlobalContext from "../../Context/GlobalContext";
import "./Main.css";
import classnames from "classnames";

const Main = () => {
  const { filterTags } = useContext(GlobalContext);

  return (
    <main className={classnames({ move_list: filterTags?.length })}>
      <CardsList></CardsList>
    </main>
  );
};

export default Main;
