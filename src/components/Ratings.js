import React from "react";

const Ratings = () => {
  return (
    <div className="ratings">
      <div className="ratings__review">
        <div className="stars">
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
        </div>

        <h4>Rated 5 stars in Reviews</h4>
      </div>

      <div className="ratings__review">
        <div className="stars">
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
        </div>

        <h4>Rated 5 stars in Report Guru</h4>
      </div>

      <div className="ratings__review">
        <div className="stars">
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
          <img src="images/icon-star.svg" alt="" />
        </div>

        <h4>Rated 5 stars in BestTech</h4>
      </div>
    </div>
  );
};

export default Ratings;
