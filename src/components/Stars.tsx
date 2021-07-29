import React from "react";
import scan from "../images/scan-and-pay.png";

interface Props {}

const Stars: React.FC<Props> = (props) => {
  return (
    <>
      <div className="bg-secondary ">
        <div className=" text-center pt-16 box-content h-36 w-2/5 pl-96 ml-12">
          <h1 className="text-3xl text-grey-800 font-semibold pb-4">
            Cash or card, you earn Stars
          </h1>
          <p className="break-normal">
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) Rewards.
          </p>
        </div>

        <div className="box-content flex">
          <div className="pl-10 ">
            <h1 className="text-2xl text-grey-800 font-semibold pb-1 ">
              1 <span> ★</span> per dollar
            </h1>
            <p>Pay as you go</p>
          </div>

            <div className="flex">
            <div className="flex box-content h-36  text-left ">
            <img src={scan} className="w-28 h-40 mr-4 ml-28 mb-4"></img>
            <div className="box-content w-64">
              <h2 className="text-xl text-grey-800 font-semibold pb-4">
                Scan and pay separately
              </h2>
              <p className="break-normal pb-4">
                Use cash or credit/debit card at the register.
              </p>
            </div>
          </div>
          <div>
          <div className="flex box-content h-36  text-left ">
            <img src={scan} className="w-28 h-40 mr-4 ml-28 mb-4"></img>
            <div className="box-content w-64">
              <h2 className="text-xl text-grey-800 font-semibold pb-4">
                Scan and pay separately
              </h2>
              <p className="break-normal pb-4">
                Use cash or credit/debit card at the register.
              </p>
            </div>
          </div>
          </div>
            </div>

          
        </div>
      </div>
    </>
  );
};

Stars.defaultProps = {};

export default React.memo(Stars);
