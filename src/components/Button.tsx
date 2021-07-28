import React from "react";

interface Props {}

const Button: React.FC<Props> = (data) => {
  return (
    <>
      <div>
            <a href="/" className=" border-2 font sans border-primary-400 rounded-full px-3 py-1 mx-3">
              Sign in 
            </a>
            <a href="/" className="text-white rounded-full px-3 py-2 font-bold text-sm font-sans bg-black">Join now</a>
          </div>
    </>
  );
};

Button.defaultProps = {};

export default React.memo(Button);
