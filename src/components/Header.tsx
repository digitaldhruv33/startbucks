import React from "react";

interface Props {


}

const Header: React.FC<Props> = (props) => {
  return ( 
  
    <>
    <div className="flex px-4 py-2 bg-primary-400 h-10 justify-between top-0 sticky" >
      <p className=" text-white font-sans text-sm">STARBUCKS® REWARDS </p>

      
      </div>
            
      </>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
