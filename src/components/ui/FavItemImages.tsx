import React from "react";

interface Props {
  ImageUrl: string;

  Text: string;
  Heading: string
}

const FavItemImages: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex justify-center  w-full">
        <div className="image ">
          <img className="h-48 " src={props.ImageUrl}></img>
        </div>
        <div className="text-container flex flex-col items-center w-80  h-full ">
          <h2 className="font-bold pb-3 w-full">{props.Heading}</h2>
          <p className="break-normal w-full text-justify h-24 ">
            {props.Text}
          </p>
        </div>
      </div>
    </>
  );
};

FavItemImages.defaultProps = {};

export default React.memo(FavItemImages);
