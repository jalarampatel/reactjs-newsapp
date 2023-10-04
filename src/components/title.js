import React from "react";

function Title({titleName}) {
  return (
    <div>
      <h1 className="title">{titleName}</h1>
      <div className="news-heading"></div>
    </div>
  );
}

export default Title;
