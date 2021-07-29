import React, { useEffect, useState } from "react";

interface Props {
  activeItem: string;
  numberOfStars: number;
  imageUrl: string;
  heading: string;
  description: string;
  setActiveItem: Function;
}

const FavItems: React.FC<Props> = (props) => {
  const [activeItem, setActiveItem] = useState(false);

  useEffect(() => {});
  return <>
  
  </>;
};

FavItems.defaultProps = {};

export default React.memo(FavItems);
