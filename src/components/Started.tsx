import React from "react";

interface Props{
}

const Started: React.FC<Props> = (props) =>{
  return(
<>
<div className="py-60 bg-secondary">
    <div className="">
      <h2 className="">Getting started is easy</h2>
      <p className="">Earn Stars and get rewarded in a few easy steps.</p>
    </div>

    <div className="box-content h-36 w-60 p-4 text-center pl-12 pb-6 item-center ">
      <p className=" ml-24 rounded-full border-2 h-12 w-12 flex items-center justify-center border-primary-300 text-primary-300">1</p>
      <h2 className="">Create an account</h2>
      <p className="break-normal">To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
    </div>

</div>
</>
);
};

Started.defaultProps = {
}

export default React.memo(Started);
