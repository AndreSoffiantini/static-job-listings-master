import { memo } from "react";
import Card from "./Card";

const CardMemo = memo(Card, (prev, next) => {
  return prev.show === next.show;
});

export default CardMemo;
