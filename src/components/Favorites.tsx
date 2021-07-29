import React from "react";
import Milk from "../images/milk.webp";
import FavImage from "./ui/FavItemImages";

interface Props {}

const Favorites: React.FC<Props> = (props) => {

  let selectedStars=0;
  const details = [
    {
      numberOfStars: 25,
      imageUrl: Milk,
      heading: " This is a heading",
      description: " this is the description",
    },
    {
      numberOfStars: 50,
      imageUrl: "abc",
      heading: " This is a heading",
      description: " this is the description",
    },
    {
      numberOfStars: 150,
      imageUrl: "abc",
      heading: " This is a heading",
      description: " this is the description",
    },
    {
      numberOfStars: 200,
      imageUrl: "abc",
      heading: " This is a heading",
      description: " this is the description",
    },
    {
      numberOfStars: 400,
      imageUrl: "abc",
      heading: " This is a heading",
      description: " this is the description",
    },
  ];

  const changeSelectedStar = (i:number)=>{
    selectedStars = i
  }
  const num = details.map((el, i) => {
    return (
      <h3 onClick= {()=>changeSelectedStar(i)} className="font-sans text-2xl font-medium cursor-pointer ">
        {el.numberOfStars}
        <span className="text-sm text-gold">★</span>
      </h3>
    );
  });
  return (
    <>
      <div>
        <div className="py-20 bg-primary-100">
          <h2 className="text-3xl font-semibold text-black">
            Get your favorites for free
          </h2>
          <div className="flex">{num}</div>
        </div>
        <div className="flex py-16 bg-primary-200">
          <FavImage
            ImageUrl={details[selectedStars].imageUrl}
            Heading={
              details[selectedStars].heading
            }
            Text={
              details[selectedStars].description
            }
          ></FavImage>

          {/* <div>
            <img className="h-48" src={Milk} alt="" />
          </div>
          <div className="box-content p-4 pb-6 pl-12 text-left h-36 w-60 item-center">
            <h2>Customize your drink</h2>
            <p className="break-normal">
              Make your drink just right with an extra espresso shot, dairy
              substitute or a dash of your favorite syrup.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

Favorites.defaultProps = {};

export default React.memo(Favorites);
