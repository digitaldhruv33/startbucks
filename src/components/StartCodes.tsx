import React from "react";

interface Props{
}

const StartCodes: React.FC<Props> = (props) =>{
  return(
<>
<div>This is star codes section</div>
</>
);
};

StartCodes.defaultProps = {
}

export default React.memo(StartCodes);
