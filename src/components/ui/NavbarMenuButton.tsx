import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  ButtonLabel: String;
  url?: any
}


const NavbarMenuButton: React.FC<Props> = (props) => {
  return (
    <>
      <Link
        to={props.url}
        className={
          "box-border flex items-center font-semibold font-sans hover:text-primary-300 m-1 h-full " +
          (useLocation().pathname === props.url
            ? "border-b-8 border-primary-300"
            : "")
        }
      >
        {props.ButtonLabel}
      </Link>
    </>
  );
};

NavbarMenuButton.defaultProps = {};

export default React.memo(NavbarMenuButton);
