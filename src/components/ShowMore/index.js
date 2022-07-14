import React from "react";

import "./index.css";

const ShowMore = ({ remainingItems, showMore }) => {
  // calling fncn using props
  let showMorehandler = () => {
    showMore();
  };
  return (
    <div className="show-more">
      <div className="show-more-title" onClick={showMorehandler}>
        <span href="">+{remainingItems} More</span>
      </div>
    </div>
  );
};
export default ShowMore;
