import React from "react";

interface Props{
}

const Footer: React.FC<Props> = (props) =>{
  return(
<>
<div>This footer section</div>
</>
);
};

Footer.defaultProps = {
}

export default React.memo(Footer);
