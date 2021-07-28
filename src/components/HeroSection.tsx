import React from "react";

interface Props {}

const HeroSection: React.FC<Props> = (props) => {
  return (
    <>
      <div className="py-72 aspect-w-4 aspect-h-3 ">
        

        <div className=" bg-cover bg-primary-200 bg-hero"></div>
        <div className="pt-56 px-12">
          <h1 className="font-sans text-grey-900  text-3xl font-semibold ">FREE COFFEE <br/>IS A TAP AWAY</h1>
          <p>Join now to start earning Rewards.</p>
          <a href="/" className="text-white rounded-full px-3 py-2 font-bold text-sm font-sans bg-primary-300">Join now</a>
          <p>Or <span> <a href="www.google.com">join in the app</a> </span> for the best experience</p>
        </div>
      </div>
    </>
  );
};

HeroSection.defaultProps = {};

export default React.memo(HeroSection);
