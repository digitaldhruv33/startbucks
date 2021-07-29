import React from "react";
import fun from "../images/fun-freebies.webp";

interface Props {}

const Extras: React.FC<Props> = (props) => {
  return (
    <>
      <div className="pb-32">
        <div className=" text-center pt-32 box-content h-36 w-2/5 pl-96 ml-12">
          <h1 className="text-3xl text-grey-800 font-semibold pb-4">
            Endless Extras
          </h1>
          <p className="break-normal">
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </p>
        </div>
        <div className="flex justify-around">
          <div className="box-content h-36 w-96 p-4 text-center pl-36 pb-36">
            <img src={fun} className="w-28 h-28 ml-28 mb-4" />
            <h2 className="text-xl text-grey-800 font-semibold pb-4">
              Fun freebies
            </h2>
            <p className="break-normal pb-4">
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </p>
            <a href="#" className="underline  text-primary-300">
              Learn more
            </a>
          </div>

          <div className="box-content h-36 w-96 p-4 text-center pl-36 pb-36">
            <img src={fun} className="w-28 h-28 ml-28 mb-4" />
            <h2 className="text-xl text-grey-800 font-semibold pb-4">
              Fun freebies
            </h2>
            <p className="break-normal pb-4">
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </p>
            <a href="#" className="underline  text-primary-300">
              Learn more
            </a>
          </div>

          <div className="box-content h-36 w-96 p-4 text-center pl-36 pb-36">
            <img src={fun} className="w-28 h-28 ml-28 mb-4" />
            <h2 className="text-xl text-grey-800 font-semibold pb-4">
              Fun freebies
            </h2>
            <p className="break-normal pb-4">
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </p>
            <a href="#" className="underline  text-primary-300">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Extras.defaultProps = {};

export default React.memo(Extras);
