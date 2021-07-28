import React from "react";

interface Props{
}

const Stars: React.FC<Props> = (props) =>{
  return(
<>
This is stars section
</>
);
};

Stars.defaultProps = {
}

export default React.memo(Stars);
