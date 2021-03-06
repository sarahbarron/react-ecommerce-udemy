import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ id, title, imageUrl, size, history, match, linkUrl }) => (
  /* This takes a prop for size if the prop has no size
    it will use the default css otherwise it will use
    the size value of the prop it is written like this
    {`{prop}` any other normal class can also go in here } */
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    {/* we don't want our outer div to get bigger we just 
    want the img to get bigger */}
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      {/* because we are using JS we can use JS methods */}
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
