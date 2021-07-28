import React from "react";

interface Props{
}

const Extras: React.FC<Props> = (props) =>{
  return(
<>
This is extras section
</>
);
};

Extras.defaultProps = {
}

export default React.memo(Extras);
