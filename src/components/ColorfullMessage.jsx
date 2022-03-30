import React from "react";

const ColorfullMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return (
    (<p style={contentStyle}>{children}</p>),
    (<p style={contentStyle}>{children}</p>)
  );
};

export default ColorfullMessage;
