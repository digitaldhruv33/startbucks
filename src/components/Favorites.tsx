import React from "react";
import Milk from "../images/milk.webp"

interface Props{
}

const Favorites: React.FC<Props> = (props) =>{
  return(
<>
<div >

  <div className="py-20 bg-primary-100">
    <h2 className="text-black font-semibold text-3xl">Get your favorites for free</h2>
    <div className="flex">
      <h3 className="font-sans font-medium text-2xl">25<span className=" text-gold text-sm">★</span></h3>
      <h3 className="font-sans font-medium text-2xl">50<span className=" text-gold text-sm">★</span></h3>
      <h3 className="font-sans font-medium text-2xl">150<span className=" text-gold text-sm">★</span></h3>
      <h3 className="font-sans font-medium text-2xl">200<span className=" text-gold text-sm">★</span></h3>
      <h3 className="font-sans font-medium text-2xl">400<span className=" text-gold text-sm">★</span></h3>
    </div>
  </div>
  <div className="py-16 bg-primary-200 flex">
    <div>
      <img className="h-48" src={Milk} alt="" />
    </div>
    <div className="box-content h-36 w-60 p-4 text-left pl-12 pb-6 item-center">
      <h2>Customize your drink</h2>
      <p className="break-normal">Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.</p>
    </div>
  </div>
</div>
</>
);
};

Favorites.defaultProps = {
}

export default React.memo(Favorites);
